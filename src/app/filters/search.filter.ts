import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'SearchFilterPipe'
})
export class SearchFilterPipe implements PipeTransform {

	transform(value: any, input: string) {

		if(input) {

			input = input.toLowerCase();			
			return value.filter((el : any) => String(el['name']).toLowerCase().indexOf(input) > -1);
				
		}

		return value;
	}

}
