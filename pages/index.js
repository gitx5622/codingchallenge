import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getCommentByPostID, getComments, getPosts} from '../state/actions/postAction';
import {Grid, Row, Col, List, Panel, Navbar, Tag, Avatar} from 'rsuite';


const Posts = () => {
    const [postID, setPostID] = useState(1);
    const dispatch = useDispatch();
    const postSelector = useSelector(state => state.postState);
    const { posts, comments, post_comments } = postSelector;

    console.log(comments)

    useEffect(() => {
        getPosts(dispatch);
        getComments(dispatch);
        getCommentByPostID(dispatch, postID)
    }, [dispatch, postID]);

    return (
        <div>
            <Navbar appearance="inverse">
                <Navbar.Brand href="#" style={styles.brand}>
                        Andela Coding Challenge
                </Navbar.Brand>
            </Navbar>
            <Grid fluid>
                <Row>
                    <Col xs={12} md={6}>
                            <div>
                                <h3>Sliced Post Names to 10</h3>
                                <List
                                    bordered
                                    style={styles.list}
                                >
                                    {posts
                                        .slice(0, 10)
                                        .map((post) => (
                                        <List.Item key={post.id} index={post.id}>
                                            <Grid fluid>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Avatar
                                                            style={styles.avatar}
                                                            circle>{post.id}
                                                        </Avatar>
                                                    </Col>
                                                    <Col xs={20}>
                                                        <div
                                                            style={styles.post}
                                                            onClick={() => { setPostID(post.id); getCommentByPostID(dispatch, post.id);}}>
                                                            {post.title}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </List.Item>
                                    ))}
                                </List>
                            </div>
                    </Col>
                    <Col xs={12} md={18}>
                        <h3>Post Comments:</h3>
                        <Panel shaded>
                            {post_comments?.map((comment) => (
                                <div key={comment.id}>
                                    <Tag color="cyan">{comment.email}</Tag>
                                        <div
                                            style={styles.comment}>
                                            <span style={{color:"violet"}}>Comment:{ "  "}</span>
                                            {comment.name}
                                        </div>
                                </div>
                            ))}
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Posts

const styles = {
    brand: {
        fontSize:"25px"
    },
    list: {
        background:"#EAEEF3"
    },
    avatar: {
        background: '#7B1FA2'
    },
    post: {
        cursor: "pointer", color:"#00BCD4"
    },
    comment: {
        fontSize:"20px", listStyle:"none", lineHeight: 2.5
    }
}
