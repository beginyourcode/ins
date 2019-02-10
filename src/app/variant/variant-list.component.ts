import { Component, OnInit } from '@angular/core';
import { Variant } from '../model/variant.model';
import { SelectItem } from 'primeng/components/common/selectitem';
import { VariantService } from '../service/variant.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-variant-list',
  templateUrl: './variant-list.component.html',
  styles: []
})
export class VariantListComponent implements OnInit {

  editFormData: Variant;

  list: Variant[];

  selectedVariant: Variant;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  p: number = 1;
  collection: any[] = this.list;

  display: boolean = false;
  titleDialog: string = "Add";

  constructor(public variantService: VariantService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.resetData();
    this.refreshData();
    this.sortOptions = [
      { label: 'Variant Name', value: '!variantName' }
    ];
  }
  refreshData() {
    this.variantService.selectAll().subscribe(array => this.list = array as Variant[]);
  }
  onEdit(variant: Variant) {

  }

  onEditP(event: Event, variant: Variant) {
    //this.service.formData = Object.assign({}, variant);
    this.editFormData = Object.assign({}, variant);
    //this.router.navigate(['/variant/add/' + variant.id]);
    //this.router.navigate(['/variant']);
    this.display = true;
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      //this.firestore.doc('variant/' + id).delete();
      this.toastr.warning('Deleted successfully', 'Variant');
    }
  }
  onDeleteP(event: Event, variant: Variant) {
    if (confirm("Are you sure to delete this record?")) {
      //this.selectedVariant = variant;
      //this.firestore.doc('variant/' + this.selectedVariant.id).delete();
      this.variantService.delete(variant).subscribe(res => {
        //debugger;
        this.refreshData();
        this.toastr.warning('Deleted successfully', 'Variant');
      },
        err => {
          debugger;
          console.log(err);
        });

      //event.preventDefault();
    }
  }
  selectCar(event: Event, car: Variant) {
    this.selectedVariant = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedVariant = null;
  }
  showDialog() {
    this.resetData();
    this.display = true;
  }
  onModalClose(event) {
    this.resetData();
    //this.refreshData();
    this.display = false;
  }
  onModalOpen(event) {
    if (this.editFormData.id == null)
      this.titleDialog = "Add";
    else
      this.titleDialog = "Edit";
  }
  resetData() {
    this.editFormData = {
      id: 0,
      variantName: '',
      modelId:0,
      fuelTypeId:0
    }
  }
}
