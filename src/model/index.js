//var SensorType = Object.freeze("TEMPERATURE":1, "HUMIDITY":2, "LIGHT":3, "SWITCH":4, "DOOR":5, "FAN_SPEED":6);
const SensorType = {
	TEMPERATURE: 'TEMPERATURE',
	HUMIDITY: 'HUMIDITY',
	LIGHT: 'LIGHT',
	SWITCH: 'SWITCH',
	DOOR: 'DOOR',
	FAN_SPEED: 'FAN_SPEED',
}

export const decod = (fichierJSON) =>
{
	var fichierLongueur = fichierJSON.length;

	var objets = new Array();

	var Sensor = function(){
		this.id = '';
		this.name = '';
		this.type = '';
	};

	var Data = function(){

	};

	for(let i = 0; i < fichierLongueur; i++)
	{
		let objetCourant = new Array();

		switch(fichierJSON[i]["type"])
		{
			case SensorType.TEMPERATURE:
				var Temperature = function(){
					this.type = "";
				}
				Temperature.prototype = new Sensor();
				var t = new Temperature();
				t.id = fichierJSON[i]["id"];
				t.name = fichierJSON[i]["name"];
				t.type = fichierJSON[i]["type"];
				objetCourant.push(t);
				break;
			case SensorType.DOOR:
				var Door = function(){
					this.type = "";
				}
				Door.prototype = new Sensor();
				var d = new Door();
				d.id = fichierJSON[i]["id"];
				d.name = fichierJSON[i]["name"];
				d.type = fichierJSON[i]["type"];
				objetCourant.push(d);
				break;
			case SensorType.FAN_SPEED:
				var Fanspeed = function(){
					this.type = "";
				}
				Fanspeed.prototype = new Sensor();
				var f = new Fanspeed();
				f.id = fichierJSON[i]["id"];
				f.name = fichierJSON[i]["name"];
				f.type = fichierJSON[i]["type"];
				objetCourant.push(f);
				break;	
		}

		if(typeof fichierJSON[i]["data"]["values"] !== 'undefined')
		{
			var TimeSeries = function()
			{
				this.values = '';
				this.labels = '';
			}
			TimeSeries.prototype = new Data();

			var time = new TimeSeries();
			time.values = fichierJSON[i]["data"]["values"];
			time.labels = fichierJSON[i]["data"]["labels"];
			objetCourant.push(time);
		}
		else if (typeof fichierJSON[i]["data"]["value"] !== 'undefined')
		{
			var Datum = function()
			{
				this.value = '';
			}
			fichierJSON[i]["data"]["value"];

			Datum.prototype = new Data();

			var datum = new Datum();
			datum.value = fichierJSON[i]["data"]["value"];
			objetCourant.push(datum);
		}

		objets.push(objetCourant);
	}

	return objets;
};

export const notNull = (value) =>
{
	if(value != '')
	{
		return true;
	}
	else
	{
		return false;
	}
};

export const notNullData = (data) =>
{
	if(data !== '')
	{
		if(typeof data.values !== 'undefined'){

			if(data.labels !== ''){
				return true;
			}
			else
				return false;
		}
		else if(data.value !== ''){

			return true;
		}
		else
			return false;
	}
	else
	{
		return false;
	}
};
