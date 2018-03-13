import React, { Component } from 'react';
import {
  Layout,
  Form,
  DatePicker,
  TimePicker,
  Icon,
  Input,
  Row,
  Col,
  Select,
  Slider
} from 'antd';
const { Footer, Content } = Layout;

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

function formatter(value) {
  return `${value}%`;
}
class TimeRelatedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airport: {
        origin: '',
        destination: ''
      }
    };
  }

  onInputChange(event) {
    console.log(event.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();

    this
      .props
      .form
      .validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }

        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const rangeTimeValue = fieldsValue['range-time-picker'];
        const values = {
          ...fieldsValue,
          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
          'range-picker': [
            rangeValue[0].format('YYYY-MM-DD'),
            rangeValue[1].format('YYYY-MM-DD')
          ],
          'range-time-picker': [
            rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')
          ],
          'time-picker': fieldsValue['time-picker'].format('HH:mm:ss')
        };
        console.log('Received values of form: ', values);
      });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 24
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        }
      }
    };
    const config = {
      rules: [
        {
          type: 'object',
          required: true,
          message: 'Please select time!'
        }
      ]
    };
    const rangeConfig = {
      rules: [
        {
          type: 'array',
          required: true,
          message: 'Please select time!'
        }
      ]
    };
    return (
      <Layout>
        <h1
          style={{
            textAlign: 'center',
            padding: '20px'
          }}>ESC Flights</h1>
        <Content style={{
          padding: '40px 20px'
        }}>
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="Destination Details">
              {getFieldDecorator('departure', {
                rules: [
                  {
                    required: true,
                    message: 'Please input departure destination!'
                  }
                ]
              })(
                <Input
                  prefix={< Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Travel from"
                  setfieldsvalue={this.state.airport.origin}
                  onChange={this.onInputChange} />
              )}
              {getFieldDecorator('arrival', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your arrival destination!'
                  }
                ]
              })(
                <Input
                  prefix={< Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Travel to"
                  setfieldsvalue={this.state.airport.destination}
                  onChange={this.onInputChange} />
              )}
            </FormItem>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem label="Travel Dates">
                  {getFieldDecorator('date-picker', config)(<DatePicker />)}
                  {getFieldDecorator('date-picker', config)(<DatePicker />)}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="Passenger Details">
                  {getFieldDecorator('gender', {
                    rules: [
                      {
                        required: true,
                        message: 'Please select number of passengers'
                      }
                    ]
                  })(
                    <Select placeholder="1 Adult" onChange={this.handleSelectChange}>
                      <Option value="2 Adults">2 Adults</Option>
                      <Option value="Children">Children</Option>
                    </Select>
                  )}
                  {getFieldDecorator('gender', {
                    rules: [
                      {
                        required: true,
                        message: 'Please select seat class!'
                      }
                    ]
                  })(
                    <Select placeholder="Economy" onChange={this.handleSelectChange}>
                      <Option value="Economy">Economy</Option>
                      <Option value="First-Class">First Class</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <FormItem label="Travel Stops">
                  {getFieldDecorator('gender', {
                    rules: [
                      {
                        required: true,
                        message: 'Please select number of passengers'
                      }
                    ]
                  })(
                    <Select placeholder="1 Adult" onChange={this.handleSelectChange}>
                      <Option value="2 Adults">2 Adults</Option>
                      <Option value="Children">Children</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="Travel Time">
                  {getFieldDecorator('gender', {
                    rules: [
                      {
                        required: true,
                        message: ''
                      }
                    ]
                  })(
                    <Select placeholder="1 Stop" onChange={this.handleSelectChange}>
                      <Option value="0 Stops">0 Stops</Option>
                      <Option value="2 Stops">2 Stops</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col>
                <Slider tipFormatter={formatter} />
              </Col>
            </Row>
          </Form>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

const TimeForm = Form.create()(TimeRelatedForm);

export default TimeForm;
