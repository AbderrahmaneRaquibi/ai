import React, { useEffect } from 'react';
import { ElevenLabsClient, play } from 'elevenlabs';

export default function Home() {
  useEffect(() => {
    const fetchAudio = async () => {
      const elevenlabs = new ElevenLabsClient({
        apiKey: 'sk_4f7bed10f4750d125293b8ce39d078bfe859a22d3c53430e', // Replace with your actual API key or set it in the environment variable
      });

      try {
        const audio = await elevenlabs.generate({
          voice: 'Rachel',
          text: 'Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்!',
          model_id: 'eleven_multilingual_v2',
        });
        await play(audio);
      } catch (error) {
        console.error('Error generating or playing audio:', error);
      }
    };

    fetchAudio();
  }, []);

  return <div>Audio is being generated and played...</div>;
}
