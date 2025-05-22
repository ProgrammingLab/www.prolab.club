import React from 'react';

export default function JsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '久留米高専プログラミングラボ部',
    alternateName: 'ProLab',
    url: 'https://www.prolab.club',
    logo: 'https://www.prolab.club/logo.png',
    sameAs: [
      'https://twitter.com/prolabknct',
      'https://github.com/ProgrammingLab/www.prolab.club'
    ],
    description: '久留米高専プログラミングラボ部（ProLab）の公式ウェブサイト。プログラミングを通して技術と創造性を探求する学生団体です。'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}