var USER = {
    name: 'Muriel Silveira',
    username: 'murielsilveira',
    image: 'https://avatars0.githubusercontent.com/u/4459232?v=3&s=460'
}

var React = require('react')
var ReactDOM = require('react-dom')

var ProfilePic = React.createClass({
    render: function() {
        return <img src={this.props.imageUrl} style={{heigth: 100, width: 100}}/>
    }
})

var Link = React.createClass({
    changeUrl: function() {
        window.location.href = this.props.href
    },
    render: function() {
        return (
            <span
                style={{color: 'blue', cursor: 'pointer'}}
                onClick={this.changeUrl}>
                {this.props.children}
            </span>
        )
    }
})

var ProfileLink = React.createClass({
    render: function() {
        return (
            <div>
                <Link href={'https://github.com/' + this.props.username}>
                    {this.props.username}
                </Link>
            </div>
        )
    }
})

var ProfileName = React.createClass({
    render: function() {
        return (
            <div>{this.props.name}</div>
        )
    }
})

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image}/>
                <ProfileName name={this.props.user.name}/>
                <ProfileLink username={this.props.user.username}/>
            </div>
        )
    }
})

ReactDOM.render(
    <Avatar user={USER}/>,
    document.getElementById('app'))
