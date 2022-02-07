import { Component, Input, OnInit } from '@angular/core';
import { Transactions } from '../wallet-data/wallet-data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() data: Transactions = {} as Transactions;

  constructor() { }

  ngOnInit(): void {
  }

}
