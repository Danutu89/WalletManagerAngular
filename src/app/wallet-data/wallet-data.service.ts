import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface WalletData {
  balance: string;
  vestedTotalBalance: string;
  vestedAllowedBalance: string;
}

export interface Transactions {
  address?: Address;
}

export interface Address {
  transactions: TransactionsClass;
}

export interface TransactionsClass {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  blockNumber: number;
  createdContractAddressHash: null | string;
  cumulativeGasUsed: string;
  error: null;
  fromAddressHash: string;
  toAddressHash: string;
  gas: string;
  gasPrice: string;
  id: string;
  status: string;
  value: string;
}


@Injectable({
  providedIn: 'root'
})
export class WalletService {
  endpoint: string = "";

  constructor(private http: HttpClient) {
    this.endpoint = "/api/wallet";
  }

  getData(address: string) {
    return this.http.get<WalletData>(`${this.endpoint}/data/${address}`);
  }

  getTransactions(address: string) {
    return this.http.get<Transactions>(`${this.endpoint}/transactions/${address}`);
  }
}
