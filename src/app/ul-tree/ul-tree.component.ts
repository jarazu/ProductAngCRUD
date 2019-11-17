import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ul-tree',
  templateUrl: './ul-tree.component.html',
  styleUrls: ['./ul-tree.component.css']
})
export class UlTreeComponent implements OnInit {


  result: any;

  list: any;

  constructor() { }

  ngOnInit() {

    var arr = [
      {
        id:1001, name: 'Bangladesh', parent_id: null, 
      },
      {
        id:1002, name: 'Dhaka', parent_id: 1001
      },
      {
        id:1003, name: 'Mirpur', parent_id: 1002
      },
      {
        id:1004, name: 'Mirpur DOHS', parent_id: 1003
      },
      {
        id:1005, name: 'Rajshahi', parent_id: 1001
      }
  ];
  
  function unflatten(arr) {
    var tree = [],
        mappedArr = {},
        arrElem,
        mappedElem;

    // First map the nodes of the array to an object -> create a hash table.
    for(var i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem.id] = arrElem;
      mappedArr[arrElem.id]['children'] = [];
    }


    for (var id in mappedArr) {
      if (mappedArr.hasOwnProperty(id)) {
        mappedElem = mappedArr[id];
        // If the element is not at the root level, add it to its parent array of children.
        if (mappedElem.parent_id) {
          mappedArr[mappedElem['parent_id']]['children'].push(mappedElem);
        }
        // If the element is at the root level, add it to first level elements array.
        else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

  this.list = unflatten(arr);
  console.log('list', this.list);
    
  }
}
