import 'regenerator-runtime';

import { useStaticSWR } from './useStaticSWR';
import { useCallback, useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export const useASRInput = ({ target }: { target: ASRInputTarget }) => {
  const { asrInputTarget, setASRInputTarget } = useASRInputTarget();
  const [inputValue, setInputValue] = useState('');
  const { transcript, listening, finalTranscript, resetTranscript } =
    useSpeechRecognition();
  const transcriptReturn = target === asrInputTarget ? transcript : '';
  const recordingReturn = target === asrInputTarget ? listening : false;
  const finalTranscriptReturn =
    target === asrInputTarget ? finalTranscript : '';

  const toggleRecording = () => {
    setASRInputTarget(target);
    if (listening) {
      void SpeechRecognition.stopListening();
    } else {
      void SpeechRecognition.startListening({
        continuous: true,
        language: 'ja-JP',
      });
    }
  };

  useEffect(() => {
    if (!listening) {
      resetTranscript();
    }
  }, [finalTranscript, listening, resetTranscript]);

  useEffect(() => {
    if (target !== asrInputTarget) return;

    if (!listening && finalTranscript) {
      setInputValue((prev) => prev + finalTranscript);
    }
  }, [finalTranscript, listening, target, asrInputTarget]);

  return {
    inputValue,
    setInputValue,
    transcript: transcriptReturn,
    finalTranscript: finalTranscriptReturn,
    recording: recordingReturn,
    toggleRecording,
  };
};

const ASRInputTargets = ['chatbot', 'create-diary'] as const;
export type ASRInputTarget = (typeof ASRInputTargets)[number];

const useASRInputTarget = () => {
  const { data: asrInputTarget, mutate } = useStaticSWR<ASRInputTarget>(
    'inputTarget',
    'chatbot',
  );

  const setASRInputTarget = useCallback(
    (data: Parameters<typeof mutate>[0]) => {
      void mutate(data, false);
    },
    [mutate],
  );

  return {
    asrInputTarget,
    setASRInputTarget,
  };
};
