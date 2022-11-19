import customFetch from '../core/customFetch';
import { Token } from '../core/types';
import { useState } from 'react';

export default function Home() {
  const testRequest = async () => {
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    console.log(response)
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => testRequest()}>Test request</button>
    </>
  );
}
