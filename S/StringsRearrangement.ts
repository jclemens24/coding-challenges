function RearrangeStrings(inputArray: string[]): boolean {
  const diffs = (s1: string, s2: string): boolean => {
    let mismatches: number = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) mismatches++;
      console.log(mismatches);
      if (mismatches > 1) break;
    }
    return mismatches === 1;
  };

  const next = (current: string, arr: string[]): string[] => {
    if (arr.length === 0) return arr;
    for (let i = 0; i < arr.length; i++) {
      if (diffs(current, arr[i])) {
        const rest = next(arr[i], arr.slice(0, i).concat(arr.slice(i + 1)));
        console.log(`rest: ${rest}`);
        console.log(
          `current element: ${current}, element to compare: ${arr[i]}`
        );
        if (rest.length === 0) return rest;
      }
    }
    return arr;
  };

  for (let i = 0; i < inputArray.length; i++) {
    const remaining = next(inputArray[i], inputArray);
    console.log(`element: ${inputArray[i]}, array: ${inputArray}`);
    console.log(`remaining: ${remaining}`);

    if (remaining.length === 0) return true;
  }
  return false;
}

console.log(RearrangeStrings(['aba', 'bbb', 'bab']));

interface Nodes {
  value: string;
}

function RearrangeStringsV2(inputArray: string[]): boolean {
  const nodes: Nodes[] = inputArray.map((value) => ({ value }));
  const graph: Map<Nodes, Nodes[]> = nodes.reduce(
    (graph, node) =>
      graph.set(
        node,
        nodes.filter((_node) => hasEdge(node.value, _node.value))
      ),
    new Map<Nodes, Nodes[]>()
  );
  console.log(graph);
  return nodes.some((node) => hasPath(new Set(), node, graph));
}

function hasPath(
  visited: Set<Nodes>,
  node: Nodes,
  graph: Map<Nodes, any>
): boolean {
  return visited.has(node) || visited.add(node).size === graph.size
    ? visited.size === graph.size
    : graph
        .get(node)
        .some((_node: Nodes) => hasPath(new Set(visited), _node, graph));
}

function hasEdge(source: string, target: string) {
  let mismatches = 0;
  for (let i = 0; i < source.length && mismatches < 2; i++) {
    if (source[i] !== target[i]) mismatches++;
  }
  return mismatches === 1;
}

console.log(RearrangeStringsV2(['aba', 'bbb', 'bab']));
