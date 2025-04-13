import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-400 rounded p-2"
        placeholder="Type something..."
      />
      <p className="mt-2 text-lg font-semibold">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
