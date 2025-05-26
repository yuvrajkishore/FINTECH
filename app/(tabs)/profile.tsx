import { StyleSheet, View, Text, ScrollView, Pressable, Image, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { User, Shield, CreditCard, Bell, CircleHelp as HelpCircle, LogOut, ChevronRight, Award, Settings, Smartphone } from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' }}
              style={styles.profileImage}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Samantha Wilson</Text>
              <Text style={styles.profileEmail}>samantha.wilson@example.com</Text>
              <Text style={styles.profilePhone}>+91 98765 43210</Text>
            </View>
          </View>
          <Pressable 
            style={styles.editProfileButton}
            onPress={() => router.push('/edit-profile')}
          >
            <Text style={styles.editProfileButtonText}>Edit</Text>
          </Pressable>
        </View>

        {/* Membership */}
        <View style={styles.membershipCard}>
          <View style={styles.membershipHeader}>
            <Award color="#FFFFFF" size={20} />
            <Text style={styles.membershipTitle}>Gold Member</Text>
          </View>
          <Text style={styles.membershipPoints}>2,450 points</Text>
          <Pressable 
            style={styles.viewMembershipButton}
            onPress={() => router.push('/membership')}
          >
            <Text style={styles.viewMembershipButtonText}>View Benefits</Text>
            <ChevronRight color="#FFFFFF" size={16} />
          </Pressable>
        </View>

        {/* Menu Sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuCard}>
            <Pressable 
              style={styles.menuItem}
              onPress={() => router.push('/security')}
            >
              <View style={[styles.menuIcon, { backgroundColor: '#EEF2FF' }]}>
                <Shield color="#6366F1" size={20} />
              </View>
              <Text style={styles.menuText}>Security</Text>
              <ChevronRight color="#9CA3AF" size={20} />
            </Pressable>
            
            <Pressable 
              style={styles.menuItem}
              onPress={() => router.push('/payment-methods')}
            >
              <View style={[styles.menuIcon, { backgroundColor: '#FEF3C7' }]}>
                <CreditCard color="#D97706" size={20} />
              </View>
              <Text style={styles.menuText}>Payment Methods</Text>
              <ChevronRight color="#9CA3AF" size={20} />
            </Pressable>
            
            <Pressable 
              style={styles.menuItem}
              onPress={() => router.push('/linked-accounts')}
            >
              <View style={[styles.menuIcon, { backgroundColor: '#DCFCE7' }]}>
                <Smartphone color="#16A34A" size={20} />
              </View>
              <Text style={styles.menuText}>Linked Accounts</Text>
              <ChevronRight color="#9CA3AF" size={20} />
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.menuCard}>
            <Pressable 
              style={styles.menuItem}
              onPress={() => router.push('/notifications-settings')}
            >
              <View style={[styles.menuIcon, { backgroundColor: '#FFE4E6' }]}>
                <Bell color="#E11D48" size={20} />
              </View>
              <Text style={styles.menuText}>Notifications</Text>
              <Switch
                trackColor={{ false: '#E5E7EB', true: '#C7D2FE' }}
                thumbColor={'#6366F1'}
                value={true}
              />
            </Pressable>
            
            <Pressable 
              style={styles.menuItem}
              onPress={() => router.push('/app-settings')}
            >
              <View style={[styles.menuIcon, { backgroundColor: '#F3E8FF' }]}>
                <Settings color="#9333EA" size={20} />
              </View>
              <Text style={styles.menuText}>App Settings</Text>
              <ChevronRight color="#9CA3AF" size={20} />
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help & Support</Text>
          <View style={styles.menuCard}>
            <Pressable 
              style={styles.menuItem}
              onPress={() => router.push('/help-center')}
            >
              <View style={[styles.menuIcon, { backgroundColor: '#E0F2FE' }]}>
                <HelpCircle color="#0284C7" size={20} />
              </View>
              <Text style={styles.menuText}>Help Center</Text>
              <ChevronRight color="#9CA3AF" size={20} />
            </Pressable>
            
            <Pressable 
              style={styles.menuItem}
              onPress={() => router.push('/contact-us')}
            >
              <View style={[styles.menuIcon, { backgroundColor: '#FEF9C3' }]}>
                <User color="#CA8A04" size={20} />
              </View>
              <Text style={styles.menuText}>Contact Us</Text>
              <ChevronRight color="#9CA3AF" size={20} />
            </Pressable>
          </View>
        </View>
        
        {/* About & Legal */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutText}>App Version 1.0.0</Text>
          <View style={styles.legalLinks}>
            <Pressable onPress={() => router.push('/terms')}>
              <Text style={styles.legalLinkText}>Terms of Service</Text>
            </Pressable>
            <Text style={styles.legalSeparator}>•</Text>
            <Pressable onPress={() => router.push('/privacy')}>
              <Text style={styles.legalLinkText}>Privacy Policy</Text>
            </Pressable>
          </View>
        </View>
        
        {/* Logout Button */}
        <Pressable style={styles.logoutButton} onPress={() => alert('Logged out successfully')}>
          <LogOut color="#E11D48" size={20} />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1F2937',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  profileCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  profileDetails: {
    
  },
  profileName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 2,
  },
  profileEmail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  profilePhone: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  editProfileButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  editProfileButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
  membershipCard: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#6366F1',
    borderRadius: 16,
    shadowColor: '#6366F1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  membershipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  membershipTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  membershipPoints: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 12,
  },
  viewMembershipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  viewMembershipButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 4,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 12,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#1F2937',
    flex: 1,
  },
  aboutSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  aboutText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  legalLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legalLinkText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#6366F1',
  },
  legalSeparator: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9CA3AF',
    marginHorizontal: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 50,
    padding: 16,
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
  },
  logoutButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#E11D48',
    marginLeft: 8,
  },
});