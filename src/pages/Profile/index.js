import React, { useState, useEffect } from 'react';
import { MdPeople, MdLocationOn, MdInbox, MdStar } from 'react-icons/md';
import { useLocation, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import api from '../../services/api';
import { toast } from 'react-toastify';

import { Container, ContainerUser, Form, Content } from './styles';

export default function Profile() {
  const [dataRepos, setDataRepos] = useState([]);

  const { state } = useLocation();

  const history = useHistory();

  useEffect(() => {
    async function loadRepos() {
      try {
        const response = await api.get(`/users/${state.data.login}/repos`);
        setDataRepos(response.data.sort((a, b) =>
          a.stargazers_count > b.stargazers_count ? -1 : 1
        ));
      } catch (err) {
        toast.error('Press Back!!');
      }
    }

    loadRepos();
  }, [state?.data?.login]);

  return (
    <>
      {state?.data ? (
        <Container>
          <header>
            <Link to="/">
              <div>
                <strong>Github</strong>
                <span>Search</span>
              </div>
            </Link>

            <Form>
              <input
                value={state.data.login}
                disabled
              />
            </Form>
          </header>

          <Content>
            <aside>
              <img src={state.data.avatar_url} alt={state.data.name} />

              <div>
                <span>@{state.data.login}</span>
                <p>{state.data.bio || 'sem bio'}</p>

                <ul>
                  <li>
                    <MdLocationOn size={18} color={`${colors.light}`}/>
                    {state.data.location || 'Unknown'}
                  </li>
                  <li>
                    <MdInbox size={18} color={`${colors.light}`} /> {state.data.public_repos}{' '}
                    repositories
                  </li>
                  <li>
                    <MdPeople size={18} color={`${colors.light}`} /> {state.data.followers}{' '}
                    followers
                  </li>
                  <li>
                    <MdPeople size={18} color={`${colors.light}`} /> {state.data.following}{' '}
                    following
                  </li>
                </ul>
              </div>
            </aside>

            <main>
              <ul>
                {dataRepos.map(repo => (
                  <li key={repo.id}>
                    {repo.name}
                    <span>
                      <MdStar size={15} color={`${colors.light}`} /> {repo.stargazers_count}
                    </span>
                  </li>
                ))}
              </ul>
            </main>
          </Content>
        </Container>
      ) : (
        <ContainerUser>
          <h1>No username found!</h1>
          <h2>Please, go back to Main page</h2>
          <button onClick={() => history.push('/')}>Back</button>
        </ContainerUser>
      )}
    </>
  );
}
