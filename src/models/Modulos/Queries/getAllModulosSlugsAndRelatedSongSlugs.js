const getAllModulosSlugsAndRelatedSongSlugs = `
  slug,
  modules_lessons (
    lessons (
      lessons_songs(
        songs (
          slug
        )
      )
    )
  )
`;

export default getAllModulosSlugsAndRelatedSongSlugs;
