
import { Card, Divider, Empty } from 'antd'
import React from 'react'



function PriceSection() {

    const cards = [
        {
            job: 'Install ceiling fan',
            cost: '	$100',
            desc: '	You supply ceiling fan to suit your home.'
        },
        {
            job: 'Supply ceiling fan',
            cost: '	$75',
            desc: 'You supply house to bolt it to.'
        },
        {
            job: 'Install new double power',
            cost: '	$90',
            desc: 'Includes labour, cable, gpo, everything.'
        },
        {
            job: 'Install double power outside',
            cost: '	$150',
            desc: '	Includes everything + weatherproof gpo.'
        },
        {
            job: 'Install new light in new location',
            cost: '	$90',
            desc: '	Includes everything except new light'
        },
        {
            job: 'Install 92mm LED downlight',
            cost: '	$90',
            desc: 'As above but includes LED downlight.'
        },
        {
            job: 'Replace light',
            cost: '	$45',
            desc: '	Replace light where there is a cable'
        },
        {
            job: 'Supply and install ceiling exhaust fan',
            cost: '	$150',
            desc: 'Supply and install ceiling exhaust fan.'
        },
        {
            job: 'Supply and install Sensor light',
            cost: '	$160',
            desc: 'Includes Twin 150w Sensor light.'
        },
        {
            job: 'Fault Finding hourly Call out',
            cost: '	$40',
            desc: 'fee applies in this case.'
        },
        {
            job: 'Hot water element',
            cost: '	$200',
            desc: '	Replace most electric hot water elements.'
        },
        {
            job: 'Accurate responses to client’s requirements',
            cost: '	$220',
            desc: '	Element or thermostat is all it could be.'
        },
        {
            job: 'Install CCTV systems package',
            cost: '	$500 +',
            desc: 'Those 4 camera eBay CCTV systems.'
        },
        {
            job: 'Install IXL 3 in 1 type bathroom light',
            cost: '	$150 ',
            desc: 'Must have roof cavity. Cannot go downstairs.'
        },
        {
            job: 'Install oven / stove new circuit',
            cost: '	$350 +',
            desc: 'Stoves require heavy duty cable.'
        },
        {
            job: 'Replace oven / stove',
            cost: '	$100',
            desc: 'You have new one there.'
        },
    ]

    return (
        <div className="w-100">
            <div className="et-service my-8">

                   


                    {/* shop pricing range >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="my-5">

                    {/* web view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <div className="d-none d-md-block">
                    <div id="carouselExampleDark2" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="my-2">
                                                <Card hoverable className="">
                                                    <div className="text-center">
                                                        <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-integrated-circuit"/></p>
                                                        <p className="text-dk fs-3 fw-bold">Commercial Service</p>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Indoor/Outdoor Lighting Installation</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Appliance & Fixture Installation</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual Electrical inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Ceiling Fan Installation</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  New & Replacement Wiring</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Surge Protection Maintenance</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  24-hour Response</p>
                                                    </div>
                                                    <Divider/>
                                                    <div className="text-center">
                                                        <p className="fs-1 fw-bold text-li m-0">$89.00</p>
                                                        <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="my-2">
                                                <Card hoverable className="">
                                                    <div className="text-center">
                                                        <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-electric-tower"/></p>
                                                        <p className="text-dk fs-3 fw-bold">Industrial Service</p>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install new double power</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Retrofit and Upgrades</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install double power outside</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Switchboard Upgrade</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Critical Installations</p>
                                                    </div>
                                                    <Divider/>
                                                    <div className="text-center">
                                                        <p className="fs-1 fw-bold text-li m-0">$130.00</p>
                                                        <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="my-2">
                                                <Card hoverable className="">
                                                    <div className="text-center">
                                                        <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-house"/></p>
                                                        <p className="text-dk fs-3 fw-bold">Residential Service</p>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Design-Build Services</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Supply and Install Sensor light</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Lighting Fixtures</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Replace Hotplates</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  SwitchBoard Upgrades</p>
                                                    </div>
                                                    <Divider/>
                                                    <div className="text-center">
                                                        <p className="fs-1 fw-bold text-li m-0">$12.00</p>
                                                        <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item" data-bs-interval="10000">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="my-2">
                                                <Card hoverable className="">
                                                    <div className="text-center">
                                                        <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-integrated-circuit"/></p>
                                                        <p className="text-dk fs-3 fw-bold">Commercial Service</p>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Indoor/Outdoor Lighting Installation</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Appliance & Fixture Installation</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual Electrical inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Ceiling Fan Installation</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  New & Replacement Wiring</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Surge Protection Maintenance</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  24-hour Response</p>
                                                    </div>
                                                    <Divider/>
                                                    <div className="text-center">
                                                        <p className="fs-1 fw-bold text-li m-0">$89.00</p>
                                                        <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="my-2">
                                                <Card hoverable className="">
                                                    <div className="text-center">
                                                        <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-electric-tower"/></p>
                                                        <p className="text-dk fs-3 fw-bold">Industrial Service</p>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install new double power</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Retrofit and Upgrades</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install double power outside</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Switchboard Upgrade</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Critical Installations</p>
                                                    </div>
                                                    <Divider/>
                                                    <div className="text-center">
                                                        <p className="fs-1 fw-bold text-li m-0">$130.00</p>
                                                        <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="my-2">
                                                <Card hoverable className="">
                                                    <div className="text-center">
                                                        <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-house"/></p>
                                                        <p className="text-dk fs-3 fw-bold">Residential Service</p>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Design-Build Services</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Supply and Install Sensor light</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Lighting Fixtures</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Replace Hotplates</p>
                                                        <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  SwitchBoard Upgrades</p>
                                                    </div>
                                                    <Divider/>
                                                    <div className="text-center">
                                                        <p className="fs-1 fw-bold text-li m-0">$12.00</p>
                                                        <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>


                        {/* mobile view >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <div className="d-block d-md-none">
                            <div id="carouselExampleDark2" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-integrated-circuit"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Commercial Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Indoor/Outdoor Lighting Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Appliance & Fixture Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual Electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Ceiling Fan Installation</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  New & Replacement Wiring</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Surge Protection Maintenance</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  24-hour Response</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$89.00</p>
                                                    <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-electric-tower"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Industrial Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install new double power</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Retrofit and Upgrades</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Install double power outside</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Switchboard Upgrade</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Critical Installations</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$130.00</p>
                                                    <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="my-2">
                                            <Card hoverable className="">
                                                <div className="text-center">
                                                    <p className="text-orng text-big m-0 p-0"><i className="flaticon flaticon-house"/></p>
                                                    <p className="text-dk fs-3 fw-bold">Residential Service</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual A/C inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Annual electrical inspection</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Design-Build Services</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Supply and Install Sensor light</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Lighting Fixtures</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  Replace Hotplates</p>
                                                    <p className="text-ls fs-6 lh-1"><span className="text-orng fas fa-check me-3"/>  SwitchBoard Upgrades</p>
                                                </div>
                                                <Divider/>
                                                <div className="text-center">
                                                    <p className="fs-1 fw-bold text-li m-0">$12.00</p>
                                                    <p className="text-dk hover-orng fw-bold fs-6">Order Now</p>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                    {/* price table section >>>>>>>>>>>>>>>>>>>>> */}
                    <div>
                        <div className="text-center">
                            <p className="text-orng fs-6 fw-bold">Our Rates</p>
                            <p className="text-dk fs-2 fw-bold">Electrical Service Prices</p>
                            <p className="fs-6 text-li d-none d-md-block w-50 mx-auto px-5">Our prices for all of our electrical services are as competitive as anywhere in the market place. All of our prices include labour and materials but exclude VAT.</p>
                            <p className="fs-6 text-li px-2 d-block d-md-none">Our prices for all of our electrical services are as competitive as anywhere in the market place. All of our prices include labour and materials but exclude VAT.</p>
                        </div>
                    </div>







            </div>
        </div>
    )
}

export default PriceSection
