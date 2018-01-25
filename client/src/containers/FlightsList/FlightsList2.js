import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';


class FlightsList extends Component {

  render() {
    const data = this.props.flights;
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    )
  }
}

function mapStateToProps({ flights }) {
  return { flights }
}

export default connect(mapStateToProps)(FlightsList);