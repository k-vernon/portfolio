import DownloadLink from "react-download-link"

function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <p> Click the link to download my resume!</p>
      <DownloadLink 
      label="Download" 
      filename="Kiana's Resume"
      exportFile={() => "My cached data"}
      />
    </>
  )
}

export default Resume