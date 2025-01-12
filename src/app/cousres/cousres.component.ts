import { Course } from '../models/course';
import { CommonModule } from '@angular/common';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface CoursesNode {
  name?: string;
  children?: Course[];
}

const TREE_DATA: CoursesNode[] = [
  {
    name: 'program',
    children: [
      { name: 'html', teacherId: 1, semesters: 2 },
      { name: 'c#', teacherId: 2, semesters: 5 },
      { name: 'angular', teacherId: 3, semesters: 1 },
    ],
  },
  {
    name: 'different',
    children: [
      { name: 'math', teacherId: 1, semesters: 7 },
      { name: 'english', teacherId: 2, semesters: 5 },
      { name: 'asembler', teacherId: 3, semesters: 1 },
    ],
  },
];

/**
 * @title Tree with nested nodes
 */

@Component({
  selector: 'app-cousres',
  standalone: true,
  styleUrl: './cousres.component.css',
  imports: [CommonModule, MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './cousres.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CousresComponent {
  treeControl = new NestedTreeControl<CoursesNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<CoursesNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  changeColor(s:number)
  {
    return s>2?"red":"black";
  }

  hasChild = (_: number, node: CoursesNode) =>
    !!node.children && node.children.length > 0;
}
