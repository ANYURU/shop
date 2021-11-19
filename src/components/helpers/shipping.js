export const zones = {
    'Zone A': {
        transport_mode: ['air', 'sea'],
        shipping_method:{
                'air': {
                    'category': 'international',
                    'delivery_agents': [
                        {
                            'name': 'DHL',
                            'price': 100,
                        },
                        {
                            'name': 'UPS',
                            'price':120,
                        } 
                    ]

                },
                'sea': {
                    'category': 'international',
                    'delivery_agents': [
                        {
                            'name': 'DHL',
                            'price': 20,
                        },
                        {
                        'name': 'Posta Uganda',
                            'price':25,
                        },
                        {
                            'name': 'EMS',
                            'price': 32,
                        } 
                        
                    ]
                }

            }, 
            
        },
    'Zone B':{
        'transport_mode':['air', 'water'],
        
    },    
}

export const regions = [
    {
        'region':'asia',
        'zone': 'Zone A',
        countries: ['china', 'japan', 'singapore'],
    },
    {   'region':'europe',
        'zone': 'Zone A',
        countries: ['UK', 'France', 'Spain'],
    },
    {
        'region': 'north_america',
        'zone': 'Zone_A',
        countries: ['Canada', 'USA'],
    },
    {
        'region':'africa',
        'zone': 'Zone_B',
        countries: ['Uganda', 'South Sudan', 'Rwanda'],
    },
    {
        'region':'middle_east',
        'zone': 'Zone_B',
        countries: ['United Arab Emirates'],
    }
]

// let country = 'Uganda' 

// let [region_which_contain_country] = regions.filter(region => region.countries.includes(country))
// const { zone } = region_which_contain_country
// console.log(zone)

const shipping_methods = {
    'international': {

    },
    'local': {

    },
    'pick_up': {

    },
    'free': {

    },
}

let country = 'Uganda'
// let countries = regions.filter(region => region.countries.includes(country)).map(region => region.zone)
// let regions_which_contain_country = regions.filter(region => region.includes(country))
// let zones_of_the_regions = regions_which_contain_country.map(region_which_contains_country => region_which_contains_country.zone)
// console.log(zones_of_the_regions)

//Get zone of the country
let [region_which_contains_country] = regions.filter(region => region.countries.includes(country))
let { zone } = region_which_contains_country
console.log(zones[zone])