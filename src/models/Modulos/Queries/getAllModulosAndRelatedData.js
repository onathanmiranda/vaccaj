const getAllModulosAndRelatedData = `
  title,
  slug,
  about,
  modules_lessons (
    lessons (
      title,
      skills (
        title
      ),
      lessons_songs(
        songs (
          title,
          slug,
          beginning,
          instructions,
          lyrics,
          songs_recordings (
            recordings (
              file_type,
              file_path,
              has_instruments,
              has_vocals,
              recordings_voice_types (
                voice_types (
                  title
                )
              )
            )
          ),
          songs_sheets (
            sheets (
              image_files
            )
          )
        )
      )
    )
  )
`;

export default getAllModulosAndRelatedData;
