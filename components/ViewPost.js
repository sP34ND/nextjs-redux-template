import { Comment, Avatar } from 'antd';
import Link from 'next/link';

const ViewPost = ({ title, body }) => (
    <Comment
        actions={[<Link href='/' key="comment-nested-reply-to"><a>View</a></Link>]}
        author={<a>{title}</a>}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
            <p>
                {body}
            </p>
        }
    >
    </Comment>
);

export default ViewPost;