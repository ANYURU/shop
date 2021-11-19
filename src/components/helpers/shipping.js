export const zones = {
    'zone_A' : [
        {
            name : 'DHL',
            mode : 'Flight',
            classes : [
                {
                    label : 'Expedited International',
                    duration_in_days : 5,
                    currency : 'USD',
                    cost : 120,
                },
                {
                    label: 'First class International',
                    duration_in_days: 15,
                    currency: 'USD',
                    cost: 90
                }
            ] 
        },
        {
            name : 'EMS',
            mode : 'Water',
            classes : [
                {
                    label : 'Standard International',
                    duration_in_days: 45,
                    currency: 'USD',
                    cost: 40
                }
            ]
        }
    ],
    'Zone B': [
        {
            company: 'Posta Uganda', 
            mode: 'Road',
            classes: [
                {
                    label: 'Same day delivery',
                    duration_in_days: 1,
                    currency: 'UGX',
                    cost: 45000
                }
            ]
        }
    ]    
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


// export const getCountryZone = (country) => {
//     let [region_which_contain_country] = regions.filter(region => region.countries.includes(country))
//     const { zone } = region_which_contain_country
//     return zones[zone]
// }


// let country = 'Uganda' 

// let [region_which_contain_country] = regions.filter(region => region.countries.includes(country))
// const { zone } = region_which_contain_country
// console.log(zone)


// let country = 'Uganda'
// let countries = regions.filter(region => region.countries.includes(country)).map(region => region.zone)
/*let regions_which_contain_country = regions.filter(region => region.includes(country))
// let zones_of_the_regions = regions_which_contain_country.map(region_which_contains_country => region_which_contains_country.zone)
// console.log(zones_of_the_regions)*/

//Get zone of the country
/*let [region_which_contains_country] = regions.filter(region => region.countries.includes(country))
let { zone } = region_which_contains_country
console.log(zones[zone])*/

export const getCountryZone = (country) => {
    let [region_which_contains_country] = regions.filter(region => region_which_contains_country.countries.includes(country))
    // let { zone = null } = region_which_contains_country
    let zone = region_which_contains_country ? region_which_contains_country.zone : null
    // console.log(zone)
    return zones[zone]
    // return zone ? zones[zone] : null
}