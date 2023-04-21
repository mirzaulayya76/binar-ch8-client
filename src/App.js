import { useState } from 'react';
import './App.css';
// import PlayerList from './PlayersList';

export default function App() {
  return (
    <div className='react'>
      <CreateNewPlayerForm />

      <EditPlayerForm />

      <SearchPlayerForm />
    </div>
  );
}

// 1. Form untuk membuat player baru, dengan tombol Submit
function CreateNewPlayerForm() {
  const [submittedData, setSubmittedData] = useState();

  function handleSubmit(event) {
    // 1. Hentikan default behavior HTML
    event.preventDefault();
    // 2. Tampilkan data di sebuah element HTML
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    console.log('apa itu json data:', jsonData);
    setSubmittedData(jsonData);
  }
  return (
    <div className='create-page'>
      <h1 className='create-heading'>Create New Player Form</h1>
      <form onSubmit={handleSubmit} className='create-form'>
        <input
          className='input-create'
          name='username'
          placeholder='username'
          required
        />
        <br />
        <input
          className='input-create'
          name='email'
          placeholder='email'
          type='email'
          required
        />
        <br />
        <input
          className='input-create'
          name='password'
          placeholder='password'
          type='password'
          required
        />
        <br />
        <input
          className='input-create'
          name='experience'
          placeholder='experience'
        />
        <br />

        <button className='create-button' type='submit'>
          Submit
        </button>
      </form>
      <p>Data that has already submitted just now:</p>
      {submittedData ? (
        <pre>{JSON.stringify(submittedData, null, 2)} </pre>
      ) : null}
    </div>
  );
}

// 2. Form untuk mengedit player, dengan tombol Submit
function EditPlayerForm() {
  const [submittedData, setSubmittedData] = useState();

  function handleSubmit(event) {
    // 1. Hentikan default behavior HTML
    event.preventDefault();
    // 2. Tampilkan data di sebuah element HTML
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    console.log('apa itu json data:', jsonData);
    setSubmittedData(jsonData);
  }
  return (
    <div className='edit-page'>
      <h1 className='edit-heading'>Edit Player Form</h1>
      <form onSubmit={handleSubmit} className='edit-form'>
        <input
          className='input-edit'
          name='username'
          placeholder='username'
          required
        />
        <br />
        <input
          className='input-edit'
          name='email'
          placeholder='email'
          type='email'
          required
        />
        <br />
        <input
          className='input-edit'
          name='password'
          placeholder='password'
          type='password'
          required
        />
        <br />
        <input
          className='input-edit'
          name='experience'
          placeholder='experience'
        />
        <br />

        <button className='edit-button' type='submit'>
          Submit
        </button>
      </form>
      <p>Data that has already submitted just now:</p>
      {submittedData ? (
        <pre>{JSON.stringify(submittedData, null, 2)} </pre>
      ) : null}
    </div>
  );
}

// 3. Form untuk pencarian player berdasarkan 4 kriteria pencarian : username, email, experience, dan lvl. jangan lupa juga tombol submit.
function SearchPlayerForm() {
  const [usernameSubmittedData, setUsernameSubmittedData] = useState();
  const [emailSubmittedData, setEmailSubmittedData] = useState();
  const [expSubmittedData, setExpSubmittedData] = useState();
  const [levelSubmittedData, setLevelSubmittedData] = useState();

  function handleUsernameSubmit(event) {
    event.preventDefault();

    const formUsernameData = new FormData(event.target);
    const jsonUsernameData = Object.fromEntries(formUsernameData);
    console.log('apa itu json username data:', jsonUsernameData);
    setUsernameSubmittedData(jsonUsernameData);
  }

  function handleEmailSubmit(event) {
    event.preventDefault();

    const formEmailData = new FormData(event.target);
    const jsonEmailData = Object.fromEntries(formEmailData);
    console.log('apa itu json email data: ', jsonEmailData);
    setEmailSubmittedData(jsonEmailData);
  }

  function handleExperienceSubmit(event) {
    event.preventDefault();

    const formExpData = new FormData(event.target);
    const jsonExpData = Object.fromEntries(formExpData);
    console.log('apa itu json experience data: ', jsonExpData);
    setExpSubmittedData(jsonExpData);
  }
  function handleLevelSubmit(event) {
    event.preventDefault();

    const formLvlData = new FormData(event.target);
    const jsonLvlData = Object.fromEntries(formLvlData);
    console.log('apa itu json level data: ', jsonLvlData);
    setLevelSubmittedData(jsonLvlData);
  }

  return (
    <div className='search-page'>
      <h2>Search Player </h2>
      <form onSubmit={handleUsernameSubmit} className='username-form'>
        <input
          className='input-username'
          name='username'
          placeholder='username'
          required
        />
        <button className='username-button' type='search'>
          Search
        </button>
        <p>Username: </p>
        {usernameSubmittedData ? (
          <pre>{JSON.stringify(usernameSubmittedData, null, 2)} </pre>
        ) : null}
      </form>
      <br />
      <form onSubmit={handleEmailSubmit} className='email-form'>
        <input
          className='input-email'
          name='email'
          placeholder='email'
          type='email'
          required
        />
        <button className='email-button' type='search'>
          Search
        </button>
        <p>email: </p>
        {emailSubmittedData ? (
          <pre>{JSON.stringify(emailSubmittedData, null, 2)} </pre>
        ) : null}
      </form>
      <br />
      <form onSubmit={handleExperienceSubmit} className='experience-form'>
        <input
          className='input-experience'
          name='experience'
          placeholder='experience'
        />
        <button className='experience-button' type='search'>
          Search
        </button>
        <p>Experience:</p>
        {expSubmittedData ? (
          <pre>{JSON.stringify(expSubmittedData, null, 2)} </pre>
        ) : null}
      </form>
      <br />
      <form onSubmit={handleLevelSubmit} className='level-form'>
        <input
          className='input-level'
          name='playerLevel'
          placeholder='player level'
        />
        <button className='level-button' type='search'>
          Search
        </button>
        <p>Level:</p>
        {levelSubmittedData ? (
          <pre>{JSON.stringify(levelSubmittedData, null, 2)} </pre>
        ) : null}
      </form>
    </div>
  );
}
