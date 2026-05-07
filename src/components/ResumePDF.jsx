import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const BLUE = '#2C5F9E';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingTop: 44,
    paddingBottom: 44,
    paddingLeft: 56,
    paddingRight: 56,
    fontFamily: 'Helvetica',
  },

  /* ── Header ── */
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  contactText: {
    fontSize: 9,
    color: '#333333',
  },
  contactLink: {
    fontSize: 9,
    color: BLUE,
    textDecoration: 'none',
  },
  contactSep: {
    fontSize: 9,
    color: '#888888',
    marginHorizontal: 4,
  },

  /* ── Section ── */
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: BLUE,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    paddingBottom: 2,
    marginBottom: 5,
    borderBottomWidth: 0.75,
    borderBottomColor: '#BBBBBB',
    borderBottomStyle: 'solid',
  },

  /* ── Body text ── */
  bodyText: {
    fontSize: 9,
    color: '#222222',
    lineHeight: 1.55,
    textAlign: 'justify',
  },

  /* ── Skills — inline bold label + normal value ── */
  skillLine: {
    fontSize: 9,
    color: '#222222',
    lineHeight: 1.5,
    marginBottom: 1,
  },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: '#111111',
  },

  /* ── Experience ── */
  expBlock: {
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#111111',
    marginBottom: 1,
  },
  jobMeta: {
    fontSize: 9,
    fontFamily: 'Helvetica-Oblique',
    color: '#555555',
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 6,
  },
  bulletDot: {
    fontSize: 9,
    color: '#222222',
    width: 11,
    marginTop: 0.5,
  },
  bulletText: {
    fontSize: 9,
    color: '#222222',
    flex: 1,
    lineHeight: 1.5,
    textAlign: 'justify',
  },

  /* ── Education ── */
  eduTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#111111',
    marginBottom: 2,
  },
  eduSubtitle: {
    fontSize: 9,
    color: '#333333',
    lineHeight: 1.5,
  },
});

const Bullet = ({ text }) => (
  <View style={styles.bulletRow}>
    <Text style={styles.bulletDot}>•</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.name}>Abdulmalik Bisiriyu</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactText}>Github: </Text>
          <Link src="https://github.com/Malikhimself" style={styles.contactLink}>Malikhimself</Link>
          <Text style={styles.contactSep}> | </Text>
          <Link src="https://linkedin.com/in/abdulmalik-bisiriyu-6639662a3" style={styles.contactLink}>LinkedIn</Link>
          <Text style={styles.contactSep}> | </Text>
          <Link src="mailto:malik.himselfdev@gmail.com" style={styles.contactLink}>malik.himselfdev@gmail.com</Link>
        </View>
      </View>

      {/* ── Professional Summary ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.bodyText}>
          Frontend Developer with hands-on experience designing, building, and shipping responsive web applications for freelance clients across multiple industries. Specializes in React-based SPAs with a strong focus on performance optimization, fluid UI animations via Framer Motion, and converting design briefs into pixel-perfect, accessible interfaces. Independently manages the full frontend delivery cycle — from requirements gathering and component architecture to deployment — consistently delivering projects that balance aesthetic quality with production-grade code. Seeking to grow into a mid-level role where deep UI craft and animation expertise translate into measurable product impact.
        </Text>
      </View>

      {/* ── Skills ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>

        <Text style={styles.skillLine}>
          <Text style={styles.skillLabel}>Languages &amp; Frameworks: </Text>
          <Text>React, JavaScript (ES6+), HTML5, CSS3 / Tailwind CSS</Text>
        </Text>

        <Text style={styles.skillLine}>
          <Text style={styles.skillLabel}>Animation &amp; Motion: </Text>
          <Text>Framer Motion</Text>
        </Text>

        <Text style={styles.skillLine}>
          <Text style={styles.skillLabel}>Tooling: </Text>
          <Text>Vite, Git</Text>
        </Text>

        <Text style={styles.skillLine}>
          <Text style={styles.skillLabel}>Discipline: </Text>
          <Text>UI/UX Design, Responsive Design, Performance Optimization</Text>
        </Text>
      </View>

      {/* ── Experience ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.expBlock}>
          <Text style={styles.jobTitle}>Frontend Developer</Text>
          <Text style={styles.jobMeta}>Freelance · Remote · Present</Text>
          <Bullet text="Developed responsive, high-performance web applications for clients using React and Vite, managing the entire frontend lifecycle from scoping to delivery." />
          <Bullet text="Implemented complex animations and micro-interactions using Framer Motion to elevate UX quality and user engagement." />
          <Bullet text="Collaborated directly with clients to translate design goals into intuitive interfaces, iterating on feedback to produce polished, premium digital experiences." />
          <Bullet text="Maintained clean, modular component architectures enabling easy handoff and future scalability." />
        </View>
      </View>

      {/* ── Certifications ── */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <View style={styles.expBlock}>
          <Text style={styles.eduTitle}>Udemy - Frontend Development Track</Text>
          <Text style={styles.eduSubtitle}>Focused on modern web technologies, performance optimization, and responsive design.</Text>
        </View>
      </View>

    </Page>
  </Document>
);

export default ResumePDF;
