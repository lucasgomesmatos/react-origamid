import { useEffect } from 'react';

export const Head = (pros) => {
  useEffect(() => {
    document.title = `Aula - ${pros.title}`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', pros.description);
  }, [pros]);

  return <></>;
};
