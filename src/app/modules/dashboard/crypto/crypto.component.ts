
import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../../services/crypto.service';
import { CryptoTableInterface } from '../../../interfaces/crypto-table';
import { LineChartService } from '../../../services/line-chart.service';
import { PieChartService } from '../../../services/pie-chart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CryptoListService } from '../../../services/crypto-list.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss',
  providers: [CryptoService, LineChartService, PieChartService, CryptoListService]
})
export class CryptoComponent implements OnInit {

  validationForm: FormGroup

  cryptoListItem: any

  constructor(private cryptoTableListService: CryptoService, private cryptoList: CryptoListService) {

    this.cryptoList.getCryptoList().subscribe((res) => {
      this.cryptoListItem = res
    })

    this.validationForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      lastPrice: new FormControl("", [Validators.required]),
      change: new FormControl("", [Validators.required]),
      lastHour: new FormControl("", [Validators.required])
    })

  }

  cryptoTableFormData: CryptoTableInterface = {
    name: '',
    lastPrice: '',
    change: 0,
    lastHour: '',
    icon: '',
  }

  refresh(): void {
    window.location.reload();
  }


  createList() {
    if (this.validationForm.valid) {
      this.cryptoTableListService.createCryptoTableList(this.cryptoTableFormData).subscribe({
        next: (data) => {
          this.closeModel()
          this.refresh()
        }, error: (err) => {
          console.log(err)
        }
      })
    }
  }

  ngOnInit(): void {

  }

  openModel() {
    const modelDiv = document.getElementById('myModal')

    if (modelDiv != null) {
      modelDiv.style.display = 'block'
    }
  }

  closeModel() {
    const modelDiv = document.getElementById('myModal')

    if (modelDiv != null) {
      modelDiv.style.display = 'none'
    }
  }


}
