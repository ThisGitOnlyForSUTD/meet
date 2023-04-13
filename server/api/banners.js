export default defineEventHandler((event) => {
  return {
    api: [
      {
        id: '1',
        title: 'Размер моей стопы',
        img: 'vansBg',
        size: 'EU: 42',
        link: '/some-path'
      },
      {
        id: '2',
        title: 'Размер одежды',
        img: 'adidasBg',
        size: 'EU: M',
        link: '/some-path'
      },
    ]
  }
})