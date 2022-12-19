import React from 'react'
import { LentBlogsElem } from './lent-blogs-elem/lent_el1_blogs'
import { LentBlogsElem2 } from './lent-blogs-elem/lent_el2_blogs'
import { LentBlogsElem3 } from './lent-blogs-elem/lent_el3_blogs'
import { LentBlogsElem4 } from './lent-blogs-elem/lent_el4_blogs'
import { LentBlogsElem5 } from './lent-blogs-elem/lent_el5_blogs'
import { LentBlogsElem6 } from './lent-blogs-elem/lent_el6_blogs'
import { FC } from 'react'

export const LentBlogs: FC = (): JSX.Element => {
	return (
		<div>
			<LentBlogsElem />
			<LentBlogsElem2 />
			<LentBlogsElem3 />
			<LentBlogsElem4 />
			<LentBlogsElem5 />
			<LentBlogsElem6 />
		</div>
	)
}
