import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { productModel } from '@rock-band-ng-store';

@Component({
	selector: 'rock-band-product-form',
	templateUrl: './product-form.component.html',
	styles: [],
})
export class ProductFormComponent implements OnInit {
	@Input() formFieldValues!: Partial<productModel.Product>;
	@Output() formValueEmitter: EventEmitter<Partial<productModel.Product>> = new EventEmitter<
		Partial<productModel.Product>
	>();
	addNewProductForm: FormGroup;

	constructor(private readonly _fb: FormBuilder) {
		this.addNewProductForm = this._fb.group({
			name: new FormControl('', [Validators.required]),
			discount: new FormControl('', [Validators.required]),
			price: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			defaultImage: new FormControl('', [Validators.required]),
			images: new FormControl('', [Validators.required]),
		});
	}

	ngOnInit(): void {
		if (this.formFieldValues) {
			// Don't need to use patchValue. defaultImage and images props will be shown in different styles
			// this.addNewProductForm.patchValue(this.formFieldValues)

			// Set value Mannually
			this.addNewProductFormFields['name'].setValue(this.formFieldValues.name);
			this.addNewProductFormFields['discount'].setValue(this.formFieldValues.discount);
			this.addNewProductFormFields['price'].setValue(this.formFieldValues.price);
			this.addNewProductFormFields['description'].setValue(this.formFieldValues.description);
		}
	}

	get addNewProductFormFields() {
		return this.addNewProductForm.controls;
	}

	formSubmit(): void {
		const newProduct = {
			name: this.addNewProductFormFields['name'].value,
			discount: this.addNewProductFormFields['discount'].value,
			price: this.addNewProductFormFields['price'].value,
			description: this.addNewProductFormFields['description'].value,
			defaultImage: this.addNewProductFormFields['defaultImage'].value,
			images: this.addNewProductFormFields['images'].value,
		};
		this.formValueEmitter.emit(newProduct);
	}
}
