//create a grph class//
class Graph {
    //defining vertex array and adjacent list//
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
        this.AdjList = new Map();
    }
    //G = (V,E)//
    //add vertex to the graph//
    AddVertex(v) {
        //initialize the adjacent list with null//
        this.AdjList.set(v, []); //funcion que añadira los nodos al grafo//
    }

    //add edge to the graph//
    addEdge(v, w) {
        //get the list for vertex v and put the//
        //vertex w denoting edge between v and w//
        this.AdjList.get(v).push(w);//grafo direccional//

        //since graph is undirected//
        //add an edge from w to v also//
        this.AdjList.get(w).push(v); //grafo no direccional añade la diferrencia a la inversa, toma el valor// 
        //nodo destino y lo empuja con el nodo de origen//
        //prints the vertex and the adjacency list//
    }
    printGraph() {
        //get all the vertex
        var get_keys = this.AdjList.keys();
        //[
        // {"A",[{"A","B"}, {"A","C"}]}, {"B",[{"B","A"}]},
        //  {"C",[{"A","C"}]}, {"D", []}, {"E",[]}, {"F",[]}
        //]
        //iterate over the vertex
        for (var i of get_keys) { //iteracion de getkeys
            //get the corresponding adjacency list for the vertex
            var get_values = this.AdjList.get(i); //variable nueva que estamos declarando por cada iteracion
            var conc = "";
            //itirate over the adjacency list concatenate the values into a string
            for (var j of get_values) conc += j + " ";
            //print the vertex and its adjacency list
            console.log(i + " -> " + conc);

        }
    }
}


//using the above implemented graph class
var g = new Graph(9);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I'];

//adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.AddVertex(vertices[i]);
}

//adding edges

g.addEdge('A', 'D');
g.addEdge('A', 'G');
g.addEdge('A', 'B');
g.addEdge('B', 'E');
g.addEdge('B', 'I');
g.addEdge('B', 'C');
g.addEdge('C', 'I');
g.addEdge('C', 'F');
g.addEdge('D', 'G');
g.addEdge('E', 'G');
g.addEdge('E', 'H');
g.addEdge('F', 'I');
g.addEdge('G', 'H');
g.addEdge('H', 'I');

g.printGraph();
 // prints all vertex and its adjacency list 
  // A -> B D E 
  // B -> A C 
  // C -> B E F 
  // D -> A E 
  // E -> A D F C 
  // F -> E C
