import 'regenerator-runtime';

import { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export const useASRInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { transcript, listening, finalTranscript, resetTranscript } =
    useSpeechRecognition();

  const toggleRecording = () => {
    if (listening) {
      void SpeechRecognition.stopListening();
    } else {
      void SpeechRecognition.startListening({
        continuous: true,
        language: 'ja-JP',
      });
    }
  };

  console.log(listening, finalTranscript, transcript);

  useEffect(() => {
    if (!listening) {
      resetTranscript();
    }
  }, [finalTranscript, listening, resetTranscript]);

  useEffect(() => {
    if (!listening && finalTranscript) {
      setInputValue((prev) => prev + finalTranscript);
    }
  }, [finalTranscript, listening]);

  return {
    inputValue,
    setInputValue,
    transcript,
    finalTranscript,
    recording: listening,
    toggleRecording,
  };
};
