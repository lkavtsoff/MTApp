import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mseaf',
	templateUrl: './mseaf.component.html',
	styleUrls: ['./mseaf.component.css']
})
export class MseafComponent implements OnInit {

	filterOpened: boolean = false;
	filter2Opened: boolean = false;

	filterSettings = {
		notOnVoyage : false,
		ranks : [],
		speciality : 'all'
	}
	
	constructor() { }

	ngOnInit() {
	}

	openFilters() {
		this.filterOpened = true;
	}
	open2Filter(param) {
		console.log (param);
		this.filter2Opened = true;
	}
	closeFilters() {
		this.filter2Opened = false;
		this.filterOpened = false;
	}
	close2Filter() {
		this.filter2Opened = false;
	}
	toggleVoyage() {
		this.filterSettings.notOnVoyage = !this.filterSettings.notOnVoyage;
	}

}
