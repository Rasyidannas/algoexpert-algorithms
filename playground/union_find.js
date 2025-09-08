class UnionFind {
  constructor(n) {
    // parent[i] = leader of i
    this.parent = new Array(n);
    // rank[i] = tree depth (used for balancing)
    this.rank = new Array(n);

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;  // each node is its own parent
      this.rank[i] = 0;    // start with rank 0
    }
  }

  // Find with path compression
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // flatten tree
    }
    return this.parent[x];
  }

  // Union by rank
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return; // already in the same group

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += 1;
    }
  }

  // Check if x and y are in the same group
  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  // Get all groups (for debugging/visualization)
  groups() {
    const map = {};
    for (let i = 0; i < this.parent.length; i++) {
      let leader = this.find(i);
      if (!map[leader]) {
        map[leader] = []
      };
      map[leader].push(i);
    }
    return Object.values(map);
  }
}

const uf = new UnionFind(6);  // 6 elements: [0, 1, 2, 3, 4, 5]

uf.union(0, 1);  // group {0,1}
// uf.union(1, 2);  // group {0,1,2}
// uf.union(3, 4);  // group {3,4}

// console.log(uf.connected(0, 2)); // true (same group)
// console.log(uf.connected(0, 3)); // false (different groups)
//
// uf.union(2, 3);  // merge groups {0,1,2} and {3,4}
//
// console.log(uf.connected(0, 4)); // true (now connected)
//
console.log(uf.groups()); 
// Example output: [ [0,1,2,3,4], [5] ]
