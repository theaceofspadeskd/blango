class PostRow extends React.Component {
  render () {
    const post = this.props.post

    let thumbnail

    if (post.hero_image.thumbnail) {
      thumbnail = <img src={post.hero_image.thumbnail}/>
    } else {
      thumbnail = '-'
    }

    return <tr>
      <td>{post.title}</td>
      <td>
        {thumbnail}
      </td>
      <td>{post.tags.join(', ')}</td>
      <td>{post.slug}</td>
      <td>{post.summary}</td>
      <td><a href={'/post/' + post.slug + '/'}>View</a></td>
    </tr>
  }
}

class PostTable extends React.Component {
  state = {
    dataLoaded: true,
    data: {
      results: [
        {
          id: 15,
          tags: [
            'django', 'react'
          ],
          'hero_image': {
            'thumbnail': '/media/__sized__/hero_images/image_2022-07-31_01-19-07_xqqx262-thumbnail-100x100.png',
            'full_size': '/media/hero_images/image_2022-07-31_01-19-07.png'
          },
          title: 'Test Post',
          slug: 'test-post',
          summary: 'A test post, created for Django/React.'
        }
      ]
    }
  }
  render () {
    let rows
    if (this.state.dataLoaded) {
      if (this.state.data.results.length) {
        rows = this.state.data.results.map(post => <PostRow post={post} key={post.id}/>)
      } else {
        rows = <tr>
          <td colSpan="6">No results found.</td>
        </tr>
      }
    } else {
      rows = <tr>
        <td colSpan="6">Loading&hellip;</td>
      </tr>
    }

    return <table className="table table-striped table-bordered mt-2">
      <thead>
      <tr>
        <th>Title</th>
        <th>Image</th>
        <th>Tags</th>
        <th>Slug</th>
        <th>Summary</th>
        <th>Link</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  }
  componentDidMount () {
    fetch(this.props.url).then(response => {
      if (response.status !== 200) {
        throw new Error('Invalid status from server: ' + response.statusText)
      }

      return response.json()
    }).then(data => {
      this.setState({
        dataLoaded: true,
        data: data
      })
    }).catch(e => {
      console.error(e)
      this.setState({
        dataLoaded: true,
        data: {
          results: []
        }
      })
    })
  }
}

const domContainer = document.getElementById('react_root')
ReactDOM.render(
  React.createElement(
    PostTable,
    {url: postListUrl}
  ),
  domContainer
)

  