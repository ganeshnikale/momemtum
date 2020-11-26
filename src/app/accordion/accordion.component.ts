import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  panelOpenState = false;

   tableData = [
    {'Discription':'momentum capital', 'Instument Type':'equity', 'record Info':'content_paste', 'Final Source':Math.random() *100000,'Final Source Base MV':Math.random() *300, 'Comment':'Lorem ipsum dolor ' },
    {'Discription':'momentum capital', 'Instument Type':'equity', 'record Info':'content_paste', 'Final Source':Math.random() *100000,'Final Source Base MV':Math.random() *300, 'Comment':'Lorem ipsum dolor ' },
    {'Discription':'momentum capital', 'Instument Type':'equity', 'record Info':'content_paste', 'Final Source':Math.random() *100000,'Final Source Base MV':Math.random() *300, 'Comment':'Lorem ipsum dolor ' },
    {'Discription':'momentum capital', 'Instument Type':'equity', 'record Info':'content_paste', 'Final Source':Math.random() *100000,'Final Source Base MV':Math.random() *300, 'Comment':'Lorem ipsum dolor ' },
    {'Discription':'momentum capital', 'Instument Type':'equity', 'record Info':'content_paste', 'Final Source':Math.random() *100000,'Final Source Base MV':Math.random() *300, 'Comment':'Lorem ipsum dolor ' },
    {'Discription':'momentum capital', 'Instument Type':'equity', 'record Info':'content_paste', 'Final Source':Math.random() *100000,'Final Source Base MV':Math.random() *300, 'Comment':'Lorem ipsum dolor ' }
  ];


  constructor() { }
  getKeys = () => (this.tableData && this.tableData.length > 0) ?  Object.keys(this.tableData[0]) : [];
  

  ngOnInit(): void {
    this.getKeys()
    console.log(this.tableData)
  }

}
