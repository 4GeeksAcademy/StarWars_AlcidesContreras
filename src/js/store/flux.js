const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			StwPeople: [],
			StwPlanets: [],
			StwVehicles: [],
			dataPeople: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
				
			},

			getDataPeople: async () =>{
				try {
					const response = await fetch('https://www.swapi.tech/api/people')
					const data = await response.json()
					setStore({StwPeople: data.results});
					
										
				} catch (error) {
					
				}
			},

			getDataPlanets: async () =>{
				try {
					const response = await fetch('https://www.swapi.tech/api/planets')

					const data = await response.json()
					setStore({StwPlanets: data.results});
					// console.log('planets');
					
					// console.log(data.results);
					
										
				} catch (error) {
					
				}
			},

			getDataVehicles: async () =>{
				try {
					const response = await fetch('https://www.swapi.tech/api/vehicles')

					const data = await response.json()
					setStore({StwVehicles: data.results});
					// console.log('vehicles');
					
					// console.log(data.results);
										
				} catch (error) {
					
				}
			},
			
			receiveDataPeople: (data) =>{
				let info = getStore().dataPeople
				info.push(data)
				let favorite = [...new Set(info)]				
				setStore({dataPeople : favorite})
			},
			
			deleteFavorite: (index) =>{
				const favorites = getStore().dataPeople
				favorites.splice(index,1)
				setStore({dataPeople : favorites})
			},	
		}
	};
};

export default getState;
