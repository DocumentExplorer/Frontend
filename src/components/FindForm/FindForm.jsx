import React from 'react'
import { Card, CardBody, Input, Button, Row, Col } from 'mdbreact'
import _ from 'lodash'
import { finding } from '../../redux/actions/order.action'
import { connect } from 'react-redux'

class FindForm extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        let picked = {}
        let onlyStrings = _.pickBy(this.state, _.isString || _.isNumber)
        _.forIn(onlyStrings, (value, key) => {
            if (value.length != 0) {
                picked[key] = value
            }
        })
        console.log(picked)
        this.props.finding(picked)
        event.preventDefault()
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <form>
                        <p className="h3 text-center py-3">Szukanie zleceń</p>
                        <div className="grey-text">
                            <Input name="number" label="Numer zlecenia" icon="file-o" group type="text" onChange={this.handleChange} />
                            <Input name="invoiceNumber" label="Numer faktury" icon="briefcase" group type="text" onChange={this.handleChange} />
                            <Input name="clientIdentificationNumber" label="NIP klienta" icon="address-card" group type="text" validate error="wrong" success="right" onChange={this.handleChange} />
                            <Input name="brokerIdentificationNumber" label="NIP pośrednika" icon="address-card-o" group type="text" validate error="wrong" success="right" onChange={this.handleChange} />
                            <Input name="clientCountry" label="Kraj klienta" icon="flag" group type="text" validate error="wrong" success="right" onChange={this.handleChange} />
                            <Input name="brokerCountry" label="Kraj pośrednika" icon="flag-o" group type="text" validate error="wrong" success="right" onChange={this.handleChange} />
                        </div>
                        <div className="text-center py-4 mt-3">
                            <Button type="submit" onClick={this.handleSubmit}>Szukaj</Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        )
    }
}

function mapStateToProps({ orders }) {
    return {
        orders
    }
}

export default connect(mapStateToProps, { finding })(FindForm)