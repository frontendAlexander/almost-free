import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './reuseStyles/Form';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'pebn6k7t');

    const res = await fetch('https://api.cloudinary.com/v1_1/dpibqzlm/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };
  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form
            data-test="form"
            onSubmit={async e => {
              e.preventDefault();
              const res = await createItem();
              Router.push({
                pathname: '/item',
                query: { id: res.data.createItem.id },
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Загрузка изображения"
                  required
                  onChange={this.uploadFile}
                />
                {this.state.image && (
                  <img width="200" src={this.state.image} alt="Загруженное изображение" />
                )}
              </label>
              <label htmlFor="title">
                Описание
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Описание"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="price">
                Цена
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Цена"
                  required
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Описание
                <textarea
                  id="description"
                  name="description"
                  placeholder="Введите описание"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Отправить</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
