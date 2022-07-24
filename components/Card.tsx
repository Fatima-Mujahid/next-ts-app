import React from 'react';
import Image from 'next/future/image';
import { Member } from '../interfaces';
import styles from './Card.module.scss';
import { ExternalLink, Heart } from 'lucide-react';

interface CardProps {
  theme: string;
  member: Member;
}

const Card = (props: CardProps) => {
  return (
    <div className={` ${styles.card} ${styles[props.theme]}`}>
      <Image
        src={props.member.image}
        alt={props.member.name}
        className={styles.image}
        width={105}
        height={105}
        quality={100}
      />
      <h3>{props.member.name}</h3>
      <p>{props.member.role}</p>
      <div>
        <div className={styles.link}>
          <ExternalLink size={18} />
        </div>
        <div className={styles.like}>
          <Heart size={18} />
        </div>
      </div>
    </div>
  );
};

export default Card;
