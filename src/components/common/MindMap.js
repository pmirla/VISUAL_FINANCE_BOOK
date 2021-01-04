import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import * as d3 from "d3";

const MindMap = (props) => {
  const history = useHistory();

  /* The useRef Hook creates a variable that "holds on" to a value across rendering
     passes. In this case it will hold our component's SVG DOM element. It's
     initialized null and React will assign it later (see the return statement) */
  const d3Container = useRef(null);

  const diagonal = d3
    .linkHorizontal()
    .x((d) => d.y)
    .y((d) => d.x);
  const dx = 10;
  const dy = 160;
  const margin = { top: 10, right: 120, bottom: 10, left: 40 };
  const tree = d3.tree().nodeSize([dx, dy]);
  const viewWidth = 600;
  const height = 800;

  /* The useEffect Hook is for running side effects outside of React,
     for instance inserting elements into the DOM using D3 */
  useEffect(
    () => {
      if (props.data && d3Container.current) {
        const root = d3.hierarchy(props.data);

        root.x0 = dy / 2;
        root.y0 = 0;
        root.descendants().forEach((d, i) => {
          d.id = i;
          d._children = d.children;
          // if (d.depth && d.data.name.length !== 7) d.children = null;
        });

        const svg = d3
          .select(d3Container.current)
          .attr("viewBox", [-margin.left, -margin.top, viewWidth, dx])
          .style("font", "10px sans-serif")
          .style("user-select", "none");

        const gLink = svg
          .append("g")
          .attr("fill", "none")
          .attr("stroke", "#555")
          .attr("stroke-opacity", 0.4)
          .attr("stroke-width", 1.5);

        const gNode = svg
          .append("g")
          .attr("cursor", "pointer")
          .attr("pointer-events", "all");

        function update(source) {
          const duration = d3.event && d3.event.altKey ? 2500 : 250;
          const nodes = root.descendants().reverse();
          const links = root.links();

          // Compute the new tree layout.
          tree(root);

          let left = root;
          let right = root;
          root.eachBefore((node) => {
            if (node.x < left.x) left = node;
            if (node.x > right.x) right = node;
          });

          const height = right.x - left.x + margin.top + margin.bottom;

          const transition = svg
            .transition()
            .duration(duration)
            .attr("viewBox", [
              -margin.left,
              left.x - margin.top,
              viewWidth,
              height
            ])
            .tween(
              "resize",
              window.ResizeObserver ? null : () => () => svg.dispatch("toggle")
            );

          // Update the nodes…
          const node = gNode.selectAll("g").data(nodes, (d) => d.id);

          // Enter any new nodes at the parent's previous position.
          const nodeEnter = node
            .enter()
            .append("g")
            .attr("transform", (d) => `translate(${source.y0},${source.x0})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0)
            .on("click", (event, d) => {
              if (d.children) {
                d.children = d.children ? null : d._children;
                update(d);
              } else {
                history.push("/math/mathElementary");
              }
              // history.push("/math/Vectors");
            });

          nodeEnter
            .append("circle")
            .attr("r", 2.5)
            .attr("fill", (d) => (d._children ? "red" : "green"))
            .attr("stroke-width", 10);

          nodeEnter
            .append("text")
            .attr("dy", "0.31em")
            .attr("x", (d) => (d._children ? -6 : 6))
            .attr("text-anchor", (d) => (d._children ? "end" : "start"))
            .text((d) => d.data.name)
            .clone(true)
            .lower()
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 3)
            .attr("stroke", "white")
            .on("click", function (d) {
              // d3.event.stopPropagation();
              // history.push("/math/Vectors");
            });

          // Transition nodes to their new position.
          const nodeUpdate = node
            .merge(nodeEnter)
            .transition(transition)
            .attr("transform", (d) => `translate(${d.y},${d.x})`)
            .attr("fill-opacity", 1)
            .attr("stroke-opacity", 1);

          // Transition exiting nodes to the parent's new position.
          const nodeExit = node
            .exit()
            .transition(transition)
            .remove()
            .attr("transform", (d) => `translate(${source.y},${source.x})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0);

          // Update the links…
          const link = gLink.selectAll("path").data(links, (d) => d.target.id);

          // Enter any new links at the parent's previous position.
          const linkEnter = link
            .enter()
            .append("path")
            .attr("d", (d) => {
              const o = { x: source.x0, y: source.y0 };
              return diagonal({ source: o, target: o });
            });

          // Transition links to their new position.
          link.merge(linkEnter).transition(transition).attr("d", diagonal);

          // Transition exiting nodes to the parent's new position.
          link
            .exit()
            .transition(transition)
            .remove()
            .attr("d", (d) => {
              const o = { x: source.x, y: source.y };
              return diagonal({ source: o, target: o });
            });

          // Stash the old positions for transition.
          root.eachBefore((d) => {
            d.x0 = d.x;
            d.y0 = d.y;
          });
        }

        update(root);
      }
    },

    /*
          useEffect has a dependency array (below). It's a list of dependency
          variables for this useEffect block. The block will run after mount
          and whenever any of these variables change. We still have to check
          if the variables are valid, but we do not have to compare old props
          to next props to decide whether to rerender.
      */
    [props.data]
  );

  return (
    <svg className="d3-component" width={900} height={1400} ref={d3Container} />
    // width={900} height={1400}
  );
};

export default MindMap;
