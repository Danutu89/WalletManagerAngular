import { Component, OnInit } from '@angular/core';
import { WalletService, WalletData, Transactions } from './wallet-data.service';

@Component({
  selector: 'app-wallet-data',
  templateUrl: './wallet-data.component.html',
  styleUrls: ['./wallet-data.component.scss']
})
export class WalletDataComponent implements OnInit {

  data: WalletData = {} as WalletData;
  transactions: Transactions = {} as Transactions;

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.getData('0x4022201c510cA44D3e3f870D7b15a7C31Aa31889');
    this.getTransactions('0x4022201c510cA44D3e3f870D7b15a7C31Aa31889');
  }

  getData(address: string) {
    this.walletService.getData(address).subscribe(data => {
      this.data = data;
    });
  }

  getTransactions(address: string) {
    this.walletService.getTransactions(address).subscribe(transactions => {
      console.log(transactions);

      this.transactions = transactions;
    });
  }

}
