import {BSTNode} from './node';
class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(data){
    var newNode= new BSTNode(data);
    if(this.root===null){
     this.root=newNode;
    }
     else{
         insert_data(this.root, newNode);
     }
    }

    insert_data(rootNode, newNode){
        if(newNode.data<rootNode.data){
            if(rootNode.left===null){
                rootNode.left=newNode;
            }else{
            // rootNode=rootNode.left;
            this.insert_data(rootNode.left , newNode);
            }
        }

        else if(rootNode.data===rootNode.data){
            window.alert('the value is already present');
        }

        else{
            if(rootNode.right===null){
                rootNode.right=newNode;
            }else{
            this.insert_data(rootNode.right , newNode);
            }      
        }
       
    }

    remove(data){
        var p=this.root;
        var par=null;
        while(p!==null){
            if(p.data===data){
                break;
            }
            par=p;
            if(data<p.data){
                p=p.left;
            }else{
                p=p.right;
            }
        }
        if(p===null){
            window.alert('data is not find');
        }
         

        var in_successor= null;
        var par_in=null;
        if(p.left!==null && p.right!==null){
             in_successor=p.right;
             par_in=p;
            while(in_successor.left!==null){
                par_in=in_successor;
                in_successor=in_successor.right; 
            }
                p.data=in_successor.data;
                p=in_successor;
                par=par_in
        }

        var child=null
        if(p.left!==null){
            child=p.left;
        }else{
            child=p.right;
        }

        if(par==null){
            this.root=child;
        }
        else if(p==par.left){
            par.left=child;
        }else{
            par.right=child;
        }

    }
}