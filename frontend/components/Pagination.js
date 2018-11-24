import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Загрузка...</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      return (
        <PaginationStyles data-test="pagination">
          <Head>
            <title>
              Almost Free! — Страница {page} из {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page - 1 },
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Предыдушая
            </a>
          </Link>
          <p>
            Страниц {props.page} из
            <span className="totalPages">{pages}</span>!
          </p>
          <p>{count} Наименований</p>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page + 1 },
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Следуюшая →
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
export { PAGINATION_QUERY };
