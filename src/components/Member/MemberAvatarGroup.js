import React from 'react'
import PropTypes from 'prop-types'

import AvatarGroup from '@material-ui/lab/AvatarGroup';

// Components
import MemberAvatar from './MemberAvatar';

// Data
import { userData } from '../../config'

const MemberAvatarGroup = ({members = [], avatarSize}) => {
    
    const hasMembersArray = !!members && Array.isArray(members);
    if (!hasMembersArray) return null;
    
    return (
        <AvatarGroup spacing="small" max={2}>
        {members?.map(memberId => {
            const member = userData.members.find(m => m._id === memberId);
            const avatarProps = {
                size: avatarSize,
                photo: member?.photo,
                firstName: member?.lastName,
                lastName: member?.lastName,
            }
            return <MemberAvatar key={member?._id} {...avatarProps} />
        })}
        </AvatarGroup>
    )
};

MemberAvatarGroup.propTypes = {
    members: PropTypes.arrayOf(PropTypes.string),
    avatarSize: PropTypes.string,
}

export default MemberAvatarGroup