import expect from 'expect';

import { decod,
	notNull
	 } from '../../src/model';

import  { data }  from './sensors_data'

describe('Sensor model tests', () => {
    describe('notNull', () => {
	for(let i = 0; i < decod(data).length; i++){	
		it('Id of object '+i+' shouldn\'t be null', () => {
			expect(notNull(decod(data)[i][0].id)).toBe(true);
		});
		it('Name of object '+i+' shouldn\'t be null', () => {
			expect(notNull(decod(data)[i][0].name)).toBe(true);
		});
		it('Type of object '+i+' shouldn\'t be null', () => {
			expect(notNull(decod(data)[i][0].type)).toBe(true);
		});
		it('Value/Values&Labels of object '+i+' shouldn\'t be null', () => {
			expect(notNull(decod(data)[i][1].values)).toBe(true);
		});
		}
     });
     describe('exactValue', () => {
		for(let i = 0; i < decod(data).length; i++){
			it('Id of object '+i+' should be equal to '+data[i].id, () => {
				expect(decod(data)[i][0].id).toBe(data[i].id);
			});
			it('Name of object '+i+' should be equal to '+data[i].name, () => {
				expect(decod(data)[i][0].name).toBe(data[i].name);
			});
			it('Type of object '+i+' should be equal to '+data[i].type, () => {
				expect(decod(data)[i][0].type).toBe(data[i].type);
			});
			if(typeof data[i].data.value !== 'undefined'){
				it('Value of object '+i+' should be equal to '+data[i].data.value, () => {
					expect(decod(data)[i][1].value).toBe(data[i].data.value);
				});
			}
			else if(typeof data[i].data.values !== 'undefined'){
				it('Values of object '+i+' should be equal to '+data[i].data.values, () => {
					expect(decod(data)[i][1].values).toBe(data[i].data.values);
				});
				it('Labels of object '+i+' should be equal to '+data[i].data.labels, () => {
					expect(decod(data)[i][1].labels).toBe(data[i].data.labels);
				});
			}
		}
     });
});
