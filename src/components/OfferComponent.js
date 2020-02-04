import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class OfferComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartTotal: 0,
            test:10,
        }

    }




    componentDidMount() {
        this.props.onRenderOfferData();
        this.renderTotalModule(this.props.MyOfferRecords);

    }

    renderTotalModule(RecordsData) {
        // var RecordsData = this.props.onRenderOfferData();
        let ProductItemRecord = RecordsData.map(x => {
            if (x.Product.useVariation) {
                // using varation price not a default price 
                let varationPriceArray = x.Product.Variations.find(priceVariation => priceVariation._id == x.Variation)
                let VariationPrice = varationPriceArray.Price * x.Qty;
                if (x.Product.hasOwnProperty('offer')) {
                    console.log("1")
                    console.log(VariationPrice)
                    if (x.Product.offer == false) {
                        if (x.Product.category.OfferApplied == true) {
                            let DiscountPrice = Math.round((VariationPrice) / (1 - (x.Product.category.OfferPercentage / 100)))
                            console.log(DiscountPrice)
                            this.setState({
                                cartTotal: cartTotal + DiscountPrice
                            })
                            // return DiscountPrice 
                            // return {
                            //     "Price": DiscountPrice,
                            //     "Offer": true
                            // }

                        }
                        else {
                            let OriginalPrice = VariationPrice;
                            // return OriginalPrice
                            // return {
                            //     "Price": OriginalPrice,
                            //     "Offer": false
                            // }
                            this.setState({
                                cartTotal: cartTotal + OriginalPrice
                            })
                        }
                    }
                    else {
                        let DiscountPrice = Math.round((DefaultPrice) - ((rowData.Product.offerpercent / 100) * DefaultPrice))
                        console.log(DiscountPrice)
                        // return DiscountPrice
                        // return {
                        //     "Price": DiscountPrice,
                        //     "Offer": true
                        // }
                        this.setState({
                            cartTotal: cartTotal + DiscountPrice
                        })
                    }
                }
                else {
                    console.log("2")
                    if (x.Product.category.OfferApplied == true) {
                        let DiscountPrice = Math.round((VariationPrice) / (1 - (x.Product.category.OfferPercentage / 100)))
                        console.log(DiscountPrice)
                        // return DiscountPrice 
                        // return {
                        //     "Price": DiscountPrice,
                        //     "Offer": true
                        // }

                        this.setState({
                            cartTotal: cartTotal + DiscountPrice
                        })

                    }
                    else {
                        let OriginalPrice = VariationPrice;
                        // return OriginalPrice
                        // return {
                        //     "Price": OriginalPrice,
                        //     "Offer": false
                        // }
                        this.setState({
                            cartTotal: cartTotal + OriginalPrice
                        })
                    }
                }

            }

            else {
                // varation false case 
                if (x.Product.useDefaultPrice) {
                    // use Product price 
                    let DefaultPrice = x.Product.Price * x.Qty;
                    if (x.Product.hasOwnProperty('offer')) {
                        console.log("1")
                        console.log(DefaultPrice)
                        if (x.Product.offer == false) {
                            if (x.Product.category.OfferApplied == true) {
                                let DiscountPrice = Math.round((DefaultPrice) / (1 - (x.Product.category.OfferPercentage / 100)))
                                console.log(DiscountPrice)
                                // return DiscountPrice 
                                // return {
                                //     "Price": DiscountPrice,
                                //     "Offer": true
                                // }
                                this.setState({
                                    cartTotal: this.state.cartTotal + DiscountPrice
                                })
                                console.log(this.state.cartTotal)
                            }
                            else {
                                let OriginalPrice = DefaultPrice;
                                // return OriginalPrice
                                // return {
                                //     "Price": OriginalPrice,
                                //     "Offer": false
                                // }

                                this.setState({
                                    cartTotal: this.state.cartTotal + OriginalPrice
                                })
                                console.log(this.state.cartTotal)


                            }
                        }
                        else {
                            let DiscountPrice = Math.round((DefaultPrice) - ((rowData.Product.offerpercent / 100) * DefaultPrice))
                            console.log(DiscountPrice)
                            // return DiscountPrice
                            // return {
                            //     "Price": DiscountPrice,
                            //     "Offer": true
                            // }
                            this.setState({
                                cartTotal: this.state.cartTotal + DiscountPrice
                            })
                            console.log(this.state.cartTotal)

                        }
                    }
                    else {
                        console.log("2")
                        if (x.Product.category.OfferApplied == true) {
                            let DiscountPrice = Math.round((DefaultPrice) / (1 - (x.Product.category.OfferPercentage / 100)))
                            console.log(DiscountPrice)
                            // return DiscountPrice 
                            // return {
                            //     "Price": DiscountPrice,
                            //     "Offer": true
                            // }
                            this.setState({
                                cartTotal: this.state.cartTotal + DiscountPrice
                            })
                            console.log(this.state.cartTotal)

                            
                        }
                        else {
                            let OriginalPrice = DefaultPrice;
                            // return OriginalPrice
                            // return {
                            //     "Price": OriginalPrice,
                            //     "Offer": false
                            // }

                            this.setState({
                                cartTotal: this.state.cartTotal + OriginalPrice
                            })
                            console.log(this.state.cartTotal)


                        }
                    }

                    // console.log(DicountPrice);

                    //  return DicountPrice
                }
            }
        })



        // console.log(ProductItemRecord);

        // let DicountTotalPrice = ProductItemRecord.map(acc => acc.Price).reduce((acc, val) => acc + val, 0)
        // let flagSet = ProductItemRecord.find(x => x.Offer == true)


        // console.log(DicountTotalPrice)
        // console.log(flagSet)
        // return {
        //     DicountTotalPrice: DicountTotalPrice,
        //     flagSet: flagSet
        // }
    }

    render() {

        console.log(this.state.cartTotal)
        
       

            var totalCost = this.props.MyOfferTotal

        //   console.log(OfferPrice)
        return (
            <View>
            {this.props.MyOfferRecords.find(x => x.Product.category.OfferApplied == true || x.Product.offer == true) ? (
                <View style={{ flexDirection: 'row' }}>
                
                <Text style={{textDecorationLine:'line-through'}}>
                    { this.state.cartTotal}
                </Text>

                <Text>
                    {totalCost}
                </Text> 

            </View>

            ):null}
            </View>
            
        )
    }
}

