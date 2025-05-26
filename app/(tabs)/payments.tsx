import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Search, CreditCard, Send, FileText, Building, Chrome as Home, Smartphone, Coffee, ShoppingBag, DollarSign, Plus } from 'lucide-react-native';

export default function PaymentsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <ArrowLeft color="#1F2937" size={24} />
          </Pressable>
          <Text style={styles.headerTitle}>Payments</Text>
          <View style={{ width: 24 }} />
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Search color="#9CA3AF" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search payments or contacts"
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Recent Contacts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Contacts</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contactsContainer}
          >
            <Pressable style={styles.contactItem}>
              <View style={styles.addContactButton}>
                <Plus color="#6366F1" size={24} />
              </View>
              <Text style={styles.contactName}>New</Text>
            </Pressable>
            
            <Pressable style={styles.contactItem}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
                style={styles.contactImage}
              />
              <Text style={styles.contactName}>Rahul</Text>
            </Pressable>
            
            <Pressable style={styles.contactItem}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' }}
                style={styles.contactImage}
              />
              <Text style={styles.contactName}>Priya</Text>
            </Pressable>
            
            <Pressable style={styles.contactItem}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }}
                style={styles.contactImage}
              />
              <Text style={styles.contactName}>Amit</Text>
            </Pressable>
            
            <Pressable style={styles.contactItem}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg' }}
                style={styles.contactImage}
              />
              <Text style={styles.contactName}>Neha</Text>
            </Pressable>
            
            <Pressable style={styles.contactItem}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' }}
                style={styles.contactImage}
              />
              <Text style={styles.contactName}>Sanjay</Text>
            </Pressable>
          </ScrollView>
        </View>

        {/* Payment Methods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <View style={styles.paymentMethodsGrid}>
            <Pressable style={styles.paymentMethod} onPress={() => router.push('/scan-pay')}>
              <View style={[styles.paymentMethodIcon, { backgroundColor: '#EEF2FF' }]}>
                <CreditCard color="#6366F1" size={24} />
              </View>
              <Text style={styles.paymentMethodText}>Scan QR</Text>
            </Pressable>
            
            <Pressable style={styles.paymentMethod} onPress={() => router.push('/bank-transfer')}>
              <View style={[styles.paymentMethodIcon, { backgroundColor: '#FEF3C7' }]}>
                <Send color="#D97706" size={24} />
              </View>
              <Text style={styles.paymentMethodText}>Send Money</Text>
            </Pressable>
            
            <Pressable style={styles.paymentMethod} onPress={() => router.push('/bill-pay')}>
              <View style={[styles.paymentMethodIcon, { backgroundColor: '#DCFCE7' }]}>
                <FileText color="#16A34A" size={24} />
              </View>
              <Text style={styles.paymentMethodText}>Pay Bills</Text>
            </Pressable>
            
            <Pressable style={styles.paymentMethod} onPress={() => router.push('/bank-transfer')}>
              <View style={[styles.paymentMethodIcon, { backgroundColor: '#FFE4E6' }]}>
                <Building color="#E11D48" size={24} />
              </View>
              <Text style={styles.paymentMethodText}>Bank Transfer</Text>
            </Pressable>
          </View>
        </View>

        {/* Bill Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pay Bills</Text>
          <View style={styles.billCategoriesGrid}>
            <Pressable style={styles.billCategory} onPress={() => router.push('/electricity-bill')}>
              <View style={[styles.billCategoryIcon, { backgroundColor: '#EEF2FF' }]}>
                <Home color="#6366F1" size={20} />
              </View>
              <Text style={styles.billCategoryText}>Electricity</Text>
            </Pressable>
            
            <Pressable style={styles.billCategory} onPress={() => router.push('/mobile-recharge')}>
              <View style={[styles.billCategoryIcon, { backgroundColor: '#FEF3C7' }]}>
                <Smartphone color="#D97706" size={20} />
              </View>
              <Text style={styles.billCategoryText}>Mobile</Text>
            </Pressable>
            
            <Pressable style={styles.billCategory} onPress={() => router.push('/water-bill')}>
              <View style={[styles.billCategoryIcon, { backgroundColor: '#DCFCE7' }]}>
                <DollarSign color="#16A34A" size={20} />
              </View>
              <Text style={styles.billCategoryText}>Water</Text>
            </Pressable>
            
            <Pressable style={styles.billCategory} onPress={() => router.push('/shopping')}>
              <View style={[styles.billCategoryIcon, { backgroundColor: '#FFE4E6' }]}>
                <ShoppingBag color="#E11D48" size={20} />
              </View>
              <Text style={styles.billCategoryText}>Shopping</Text>
            </Pressable>
            
            <Pressable style={styles.billCategory} onPress={() => router.push('/dining')}>
              <View style={[styles.billCategoryIcon, { backgroundColor: '#F3E8FF' }]}>
                <Coffee color="#9333EA" size={20} />
              </View>
              <Text style={styles.billCategoryText}>Dining</Text>
            </Pressable>
            
            <Pressable style={styles.billCategory} onPress={() => router.push('/more-bills')}>
              <View style={[styles.billCategoryIcon, { backgroundColor: '#E0F2FE' }]}>
                <Plus color="#0284C7" size={20} />
              </View>
              <Text style={styles.billCategoryText}>More</Text>
            </Pressable>
          </View>
        </View>

        {/* Recent Payments */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Payments</Text>
            <Pressable onPress={() => router.push('/all-transactions')}>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </View>
          
          <View style={styles.recentPaymentsList}>
            <Pressable style={styles.paymentItem}>
              <View style={[styles.paymentItemIcon, { backgroundColor: '#EEF2FF' }]}>
                <Smartphone color="#6366F1" size={24} />
              </View>
              <View style={styles.paymentItemDetails}>
                <Text style={styles.paymentItemTitle}>Mobile Recharge</Text>
                <Text style={styles.paymentItemDate}>Today at 11:45 AM</Text>
              </View>
              <Text style={styles.paymentItemAmount}>- ₹499</Text>
            </Pressable>

            <Pressable style={styles.paymentItem}>
              <View style={[styles.paymentItemIcon, { backgroundColor: '#DCFCE7' }]}>
                <Home color="#16A34A" size={24} />
              </View>
              <View style={styles.paymentItemDetails}>
                <Text style={styles.paymentItemTitle}>Electricity Bill</Text>
                <Text style={styles.paymentItemDate}>Yesterday at 3:20 PM</Text>
              </View>
              <Text style={styles.paymentItemAmount}>- ₹1,240</Text>
            </Pressable>

            <Pressable style={styles.paymentItem}>
              <View style={[styles.paymentItemIcon, { backgroundColor: '#FEF3C7' }]}>
                <ShoppingBag color="#D97706" size={24} />
              </View>
              <View style={styles.paymentItemDetails}>
                <Text style={styles.paymentItemTitle}>Amazon</Text>
                <Text style={styles.paymentItemDate}>20 Jun 2023 at 5:30 PM</Text>
              </View>
              <Text style={styles.paymentItemAmount}>- ₹2,499</Text>
            </Pressable>

            <Pressable style={styles.paymentItem}>
              <View style={[styles.paymentItemIcon, { backgroundColor: '#FFE4E6' }]}>
                <Building color="#E11D48" size={24} />
              </View>
              <View style={styles.paymentItemDetails}>
                <Text style={styles.paymentItemTitle}>Rent Transfer</Text>
                <Text style={styles.paymentItemDate}>15 Jun 2023 at 10:15 AM</Text>
              </View>
              <Text style={styles.paymentItemAmount}>- ₹15,000</Text>
            </Pressable>
          </View>
        </View>

        {/* Offer Banner */}
        <Pressable style={styles.offerBanner} onPress={() => router.push('/offers')}>
          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>Special Offer!</Text>
            <Text style={styles.offerDescription}>Get 10% cashback on your first bill payment</Text>
            <View style={styles.offerButton}>
              <Text style={styles.offerButtonText}>Claim Now</Text>
            </View>
          </View>
          <View style={styles.offerImageContainer}>
            <DollarSign color="#FFFFFF" size={40} />
          </View>
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
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1F2937',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1F2937',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 16,
  },
  seeAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
  contactsContainer: {
    paddingRight: 20,
  },
  contactItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  addContactButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#4B5563',
  },
  paymentMethodsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  paymentMethod: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  paymentMethodIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  paymentMethodText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#4B5563',
  },
  billCategoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  billCategory: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  billCategoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  billCategoryText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  recentPaymentsList: {
    
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  paymentItemIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  paymentItemDetails: {
    flex: 1,
  },
  paymentItemTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#1F2937',
  },
  paymentItemDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  paymentItemAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1F2937',
  },
  offerBanner: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#6366F1',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#6366F1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  offerContent: {
    flex: 3,
  },
  offerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  offerDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 12,
  },
  offerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  offerButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#6366F1',
  },
  offerImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
  },
});