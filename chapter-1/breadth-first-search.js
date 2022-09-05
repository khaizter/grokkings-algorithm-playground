const search = (graph, start, target) => {
  let searchQueue = [];
  searchQueue.push(start);
  const searched = [];
  while (searchQueue.length !== 0) {
    console.log("iter");
    // deque
    const currentNode = searchQueue.shift();

    // check if currentNode exist in searched array
    if (searched.some((item) => item === currentNode)) continue;

    // add to searched so we don't check this again on next iter
    searched.push(currentNode);

    if (currentNode === target) {
      console.log("found", currentNode);
      return true;
    } else {
      // add its neighbors to the search queue list
      searchQueue = searchQueue.concat(graph[currentNode]);
    }
  }
  return false;
};

const myGraph = {};
myGraph["you"] = ["bob", "claire", "alice"];
myGraph["bob"] = ["you", "peggy", "anuj"];
myGraph["claire"] = ["you", "jonny", "thom"];
myGraph["alice"] = ["you", "peggy"];
myGraph["peggy"] = ["bob", "alice"];
myGraph["anuj"] = ["bob"];
myGraph["jonny"] = ["claire"];
myGraph["thom"] = ["claire"];

const result = search(myGraph, "you", "thom");

console.log(result);
